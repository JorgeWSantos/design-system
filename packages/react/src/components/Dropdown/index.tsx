import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Container,
  StyledDropdown,
  ContainerOptions,
  Option,
  StyledTextSelect,
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
 */

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

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const [autoToTop, setAutoToTop] = useState(false);

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

  return (
    <Container $hasLabel={!!label} ref={dropdownRef} $maxWidth={maxWidth}>
      {label && (
        <StyledLabel $variant={variant} style={labelStyle}>
          {label}
        </StyledLabel>
      )}

      <StyledDropdown
        {...rest}
        onClick={() => {
          if (selectedOption !== null) {
            setShowOptions((prev) => !prev);
          }
        }}
        $variant={variant}
        $maxWidth={maxWidth}
      >
        <StyledTextSelect $variant={variant}>
          {selectedOption?.label || null}
        </StyledTextSelect>

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
        >
          {data.map((item) => (
            <Option $variant={variant} key={item.id} onClick={() => selectAnOption(item)}>
              <p>{item.label}</p>
            </Option>
          ))}
        </ContainerOptions>
      )}
    </Container>
  );
}

Dropdown.displayName = 'Dropdown';

export * from './types';
