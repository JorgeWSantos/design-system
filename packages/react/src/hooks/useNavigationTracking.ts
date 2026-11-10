import { useEffect, useRef } from 'react';

const NAVIGATION_TRACKING_ROUTE = '/v1/NavegacaoSeqm';
const LAST_SCREEN_COOKIE = '@SeqmLastScreen';
// Meia hora: passado disso a "tela anterior" já não é a mesma visita.
const LAST_SCREEN_MAX_AGE_SECONDS = 30 * 60;

export interface NavigationScreenRoute {
  /**
   * Caminho no formato do react-router, com ou sem barra inicial: `:param` casa
   * um segmento e `*` no fim casa o resto. Ex.: `modalidade/:prove_id`.
   */
  path: string;
  /** Rótulo estável da tela, sem acento e em PascalCase. Ex.: `Modalidade`. */
  screen: string;
}

interface TrackedScreen {
  module: string;
  screen: string;
}

export interface UseNavigationTrackingOptions {
  /** Módulo (front) do SEQM. Ex.: `resultados`, `ranking`. */
  module: string;
  /** Rótulo da tela atual — use `resolveScreenName` com o mapa de rotas do app. */
  screen: string;
  /**
   * Base da core-api-seqm-geral (o mesmo valor de `VITE_API_GERAL`, terminando em
   * `/api`). Vem por parâmetro porque a lib não lê `import.meta.env`. Vazio = não
   * registra.
   */
  apiUrl?: string;
  /**
   * Devolve o token do usuário logado, lido na hora do envio. Sem token o evento
   * é registrado como navegação anônima.
   */
  getToken?: () => string | null | undefined;
  /**
   * Domínio do cookie que leva a tela anterior de um front para o outro. Padrão:
   * `.seqm.com.br` quando o front roda num subdomínio dele; fora disso (localhost)
   * o cookie vale só para o host atual.
   */
  cookieDomain?: string;
  /** `false` desliga o registro. Padrão `true`. */
  enabled?: boolean;
}

// Última tela registrada nesta carga da página. Fica no módulo, e não num ref,
// para sobreviver à remontagem do Layout (ele é recriado quando a rota cai no
// errorElement) sem registrar a mesma tela duas vezes.
let lastTracked: TrackedScreen | null = null;

const splitPath = (path: string) => path.split('/').filter(Boolean);

const matchesRoute = (pathSegments: string[], routePath: string) => {
  const routeSegments = splitPath(routePath);
  const hasWildcard = routeSegments[routeSegments.length - 1] === '*';
  const fixedSegments = hasWildcard ? routeSegments.slice(0, -1) : routeSegments;

  if (hasWildcard) {
    if (pathSegments.length < fixedSegments.length) return false;
  } else if (pathSegments.length !== fixedSegments.length) {
    return false;
  }

  return fixedSegments.every(
    (segment, index) => segment.startsWith(':') || segment === pathSegments[index]
  );
};

/**
 * Traduz o `pathname` no rótulo estável da tela, sem os parâmetros da URL
 * (ids de evento, prova, pessoa...). Vale a primeira rota que casar; sem rota
 * correspondente devolve o próprio `pathname`.
 */
export function resolveScreenName(
  pathname: string,
  routes: NavigationScreenRoute[]
): string {
  const pathSegments = splitPath(pathname);
  const route = routes.find(({ path }) => matchesRoute(pathSegments, path));

  return route ? route.screen : pathname;
}

const readLastScreen = (): TrackedScreen | null => {
  try {
    const match = document.cookie.match(
      new RegExp('(^| )' + LAST_SCREEN_COOKIE + '=([^;]+)')
    );

    if (!match) return null;

    const value = JSON.parse(decodeURIComponent(match[2])) as Partial<TrackedScreen>;

    return typeof value.module === 'string' && typeof value.screen === 'string'
      ? { module: value.module, screen: value.screen }
      : null;
  } catch {
    // Cookie adulterado ou bloqueado: segue sem tela anterior.
    return null;
  }
};

// Mesmo domínio pai do cookie de login (@SeqmToken), que os fronts já compartilham.
const SEQM_HOST = 'seqm.com.br';

const getDefaultCookieDomain = () => {
  const { hostname } = globalThis.location;

  return hostname === SEQM_HOST || hostname.endsWith(`.${SEQM_HOST}`)
    ? `.${SEQM_HOST}`
    : undefined;
};

const writeLastScreen = (tracked: TrackedScreen, domain?: string) => {
  try {
    const cookieDomain = domain ?? getDefaultCookieDomain();

    document.cookie =
      `${LAST_SCREEN_COOKIE}=${encodeURIComponent(JSON.stringify(tracked))}; ` +
      `max-age=${LAST_SCREEN_MAX_AGE_SECONDS}; path=/; SameSite=Lax` +
      (cookieDomain ? `; domain=${cookieDomain}` : '') +
      (globalThis.location.protocol === 'https:' ? '; Secure' : '');
  } catch {
    // Sem cookie só se perde a tela anterior entre fronts; o registro continua.
  }
};

/**
 * Registra a navegação do usuário nos fronts do SEQM: a cada troca de tela envia
 * a tela atual e a anterior para `POST {apiUrl}/v1/NavegacaoSeqm`
 * (core-api-seqm-geral). Mesmo desenho do registro de navegação do app e do
 * Consulta de Animal.
 *
 * Cada front roda no seu subdomínio, então a tela anterior atravessa de um front
 * para o outro por um cookie de curta duração no domínio pai. O token é opcional:
 * as telas públicas são registradas como navegação anônima.
 *
 * É telemetria: nenhuma falha (rede, API fora, cookie bloqueado) chega ao usuário.
 */
export function useNavigationTracking({
  module,
  screen,
  apiUrl,
  getToken,
  cookieDomain,
  enabled = true,
}: UseNavigationTrackingOptions): void {
  // Lidos na hora do envio, sem entrar nas dependências do registro: uma função
  // nova a cada render não pode disparar evento.
  const getTokenRef = useRef(getToken);
  const cookieDomainRef = useRef(cookieDomain);

  useEffect(() => {
    getTokenRef.current = getToken;
    cookieDomainRef.current = cookieDomain;
  });

  useEffect(() => {
    if (!enabled || !apiUrl || !module || !screen) return;

    if (lastTracked?.module === module && lastTracked.screen === screen) return;

    const previous = lastTracked ?? readLastScreen();

    lastTracked = { module, screen };
    writeLastScreen(lastTracked, cookieDomainRef.current);

    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      const token = getTokenRef.current?.();

      if (token) headers.Authorization = `Bearer ${token}`;

      globalThis
        .fetch(`${apiUrl.replace(/\/+$/, '')}${NAVIGATION_TRACKING_ROUTE}`, {
          method: 'POST',
          headers,
          // Sem querystring: o token de login chega por `?tk=` e não pode ir junto.
          body: JSON.stringify({
            module,
            screen,
            previous_module: previous?.module ?? null,
            previous_screen: previous?.screen ?? null,
            url: `${globalThis.location.origin}${globalThis.location.pathname}`,
            date: new Date().toISOString(),
          }),
          // Deixa o envio terminar mesmo se a tela seguinte for outro front.
          keepalive: true,
        })
        .catch(() => {
          // Melhor esforço: a navegação nunca pode travar por causa da telemetria.
        });
    } catch {
      // Idem: navegador sem fetch ou bloqueio de rede não interrompe a tela.
    }
  }, [enabled, apiUrl, module, screen]);
}
