import {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Container,
  StyledDropdown,
  ContainerOptions,
  Option,
  NoResults,
  StyledTextSelect,
  StyledSearchInput,
  StyledCaretDownFillIcon,
  StyledLabel,
} from './styles';
import { useClickOutside } from 'hooks/useClickOutside';
import { DropdownProps, DataDropdown } from './types';

/**
 * Propriedades do componente Dropdown.
 *
 * @property {(item: DataDropdown) => void} [setValue] - Função chamada ao selecionar uma opção.
 * @property {DataDropdown | null} [value] - Valor selecionado atualmente.
 * @property {DataDropdown[]} data - Lista de opções disponíveis para seleção.
 * @property {string | null} [label] - Rótulo exibido acima do Dropdown.
 * @property {VariantsTypesDropdown} [variant] - Variante visual do Dropdown ('primary', 'secondary', 'tertiary').
 * @property {string} [maxHeight] - Altura máxima do menu de opções.
 * @property {string} [maxWidth] - Largura máxima do Dropdown.
 * @property {boolean} [openToTop] - Força a direção do menu de opções. Quando omitido, o Dropdown
 * decide sozinho: mede o espaço livre abaixo do gatilho dentro do ancestral que recorta o conteúdo
 * (o container rolável, ou a viewport) e abre para cima só quando o menu não caberia para baixo.
 * @property {ElementType} [as] - Permite trocar o elemento HTML raiz do Dropdown.
 * @property {React.CSSProperties} [stylesContainerOptions] - Estilos CSS adicionais aplicados ao container das opções do Dropdown.
 * @property {React.CSSProperties} [labelStyle] - Estilos CSS adicionais aplicados à label do Dropdown.
 * @property {boolean} [searchable] - Quando verdadeiro, ao abrir o campo vira um input e a lista é filtrada
 * enquanto o usuário digita (sem diferenciar maiúsculas e acentos). Setas navegam, Enter escolhe, Esc fecha.
 * @property {string} [searchPlaceholder] - Placeholder do input de busca quando não há opção selecionada.
 * @property {string} [emptyMessage] - Texto exibido quando nenhuma opção corresponde ao que foi digitado.
 */

/** Remove acentos e caixa para comparar o que foi digitado com o rótulo das opções. */
const normalizeText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Sobe a árvore até o primeiro ancestral que recorta o conteúdo (overflow-y
 * diferente de 'visible'). É esse elemento — e não a tela — que define até onde
 * o menu pode crescer sem ser cortado ou provocar scroll.
 */
const getClippingAncestor = (el: HTMLElement | null): HTMLElement | null => {
  let node = el?.parentElement ?? null;

  while (node && node !== document.body) {
    if (window.getComputedStyle(node).overflowY !== 'visible') {
      return node;
    }

    node = node.parentElement;
  }

  return null;
};

export function Dropdown({
  data,
  setValue,
  value = null,
  label = null,
  variant = 'primary',
  maxHeight = 'unset',
  maxWidth = '100%',
  openToTop,
  labelStyle,
  stylesContainerOptions,
  searchable = false,
  searchPlaceholder = 'Digite para filtrar',
  emptyMessage = 'Nenhum resultado',
  ...rest
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(
    value ? value : data.length > 0 ? data[0] : null
  );
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    } else {
      setSelectedOption(data.length > 0 ? data[0] : null);
    }
  }, [value, data]);

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [autoToTop, setAutoToTop] = useState(false);

  const filteredData = useMemo(() => {
    const term = normalizeText(query.trim());

    if (!searchable || !term) return data;

    return data.filter((item) => normalizeText(item.label).includes(term));
  }, [data, query, searchable]);

  // 'openToTop' explícito segue valendo como override manual; sem ele, decide sozinho.
  const shouldOpenToTop = openToTop ?? autoToTop;

  useClickOutside(dropdownRef, () => setShowOptions(false));

  const resolveDirection = useCallback(() => {
    const trigger = dropdownRef.current;
    const menu = optionsRef.current;

    if (!trigger || !menu) return;

    const triggerRect = trigger.getBoundingClientRect();
    const menuHeight = menu.offsetHeight;
    const clipRect = getClippingAncestor(trigger)?.getBoundingClientRect();

    // O menu é 'position: absolute' e não usa portal, então quem manda é o
    // ancestral que recorta — a viewport entra só como limite adicional.
    const limiteAbaixo = Math.min(clipRect?.bottom ?? Infinity, window.innerHeight);
    const limiteAcima = Math.max(clipRect?.top ?? 0, 0);

    const espacoAbaixo = limiteAbaixo - triggerRect.bottom;
    const espacoAcima = triggerRect.top - limiteAcima;

    // Abre para cima só quando não cabe abaixo E sobra mais espaço acima.
    setAutoToTop(espacoAbaixo < menuHeight && espacoAcima > espacoAbaixo);
  }, []);

  // useLayoutEffect roda antes da pintura: o menu nunca é visto na direção errada.
  useLayoutEffect(() => {
    if (!showOptions) {
      setAutoToTop(false);
      return;
    }

    resolveDirection();

    // Rolar ou redimensionar com o menu aberto pode inverter a direção.
    // 'capture' pega o scroll de qualquer ancestral, não só o da window.
    window.addEventListener('scroll', resolveDirection, true);
    window.addEventListener('resize', resolveDirection);

    return () => {
      window.removeEventListener('scroll', resolveDirection, true);
      window.removeEventListener('resize', resolveDirection);
    };
  }, [showOptions, resolveDirection]);

  // Ao fechar, limpa a busca; ao abrir no modo searchable, já deixa o cursor no campo.
  useEffect(() => {
    if (!showOptions) {
      setQuery('');
      setActiveIndex(-1);
      return;
    }

    if (searchable) {
      searchInputRef.current?.focus();
    }
  }, [showOptions, searchable]);

  // Mantém a opção destacada pelo teclado visível dentro do menu rolável.
  useEffect(() => {
    if (activeIndex < 0) return;

    const activeOption = optionsRef.current?.children[activeIndex];

    activeOption?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const selectAnOption = useCallback(
    (item: DataDropdown) => {
      setSelectedOption(item);
      setShowOptions(false);

      if (setValue) {
        setValue(item);
      }
    },
    [setValue]
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: typed } = event.target;

    setQuery(typed);
    setActiveIndex(typed.trim() ? 0 : -1);
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, filteredData.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Enter': {
        event.preventDefault();

        const item = filteredData[activeIndex >= 0 ? activeIndex : 0];

        if (item) selectAnOption(item);
        break;
      }
      case 'Escape':
        setShowOptions(false);
        break;
      default:
        break;
    }
  };

  return (
    <Container $hasLabel={!!label} ref={dropdownRef} $maxWidth={maxWidth}>
      {label && (
        <StyledLabel $variant={variant} style={labelStyle}>
          {label}
        </StyledLabel>
      )}

      <StyledDropdown
        {...rest}
        onClick={(event: MouseEvent<HTMLDivElement>) => {
          // com o input aberto, clicar nele (para posicionar o cursor) não deve fechar a lista
          if (searchable && showOptions && event.target === searchInputRef.current) {
            return;
          }

          if (selectedOption !== null) {
            setShowOptions((prev) => !prev);
          }
        }}
        $variant={variant}
        $maxWidth={maxWidth}
      >
        {searchable && showOptions ? (
          <StyledSearchInput
            ref={searchInputRef}
            $variant={variant}
            type="text"
            value={query}
            placeholder={selectedOption?.label || searchPlaceholder}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            autoComplete="off"
            role="combobox"
            aria-expanded={showOptions}
            aria-autocomplete="list"
            aria-label={label ?? searchPlaceholder}
          />
        ) : (
          <StyledTextSelect $variant={variant}>
            {selectedOption?.label || null}
          </StyledTextSelect>
        )}

        <StyledCaretDownFillIcon $variant={variant} $rotated={showOptions} />
      </StyledDropdown>

      {showOptions && (
        <ContainerOptions
          ref={optionsRef}
          $variant={variant}
          $maxHeight={maxHeight}
          $maxWidth={maxWidth}
          $openToTop={shouldOpenToTop}
          $hasLabel={!!label}
          style={stylesContainerOptions}
          role={searchable ? 'listbox' : undefined}
        >
          {filteredData.map((item, index) => (
            <Option
              $variant={variant}
              $active={searchable && index === activeIndex}
              key={item.id}
              role={searchable ? 'option' : undefined}
              aria-selected={searchable ? item.id === selectedOption?.id : undefined}
              onClick={() => selectAnOption(item)}
            >
              <p>{item.label}</p>
            </Option>
          ))}

          {searchable && filteredData.length === 0 && (
            <NoResults>{emptyMessage}</NoResults>
          )}
        </ContainerOptions>
      )}
    </Container>
  );
}

Dropdown.displayName = 'Dropdown';

export * from './types';
