import { Meta, StoryObj } from '@storybook/react';
import { Box, Dropdown, DropdownProps, DataDropdown } from '@abqm-ds/react';
import { radii, space } from '@abqm-ds/tokens';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
} as Meta<DropdownProps>;

const defaultData: DataDropdown[] = [
  { value: '', label: 'Todos', id: '' },
  { value: 'ac', label: 'Acre', id: '0' },
  { value: 'al', label: 'Alagoas', id: '1' },
  { value: 'ap', label: 'Amapá', id: '2' },
  { value: 'am', label: 'Amazonas', id: '3' },
  { value: 'ba', label: 'Bahia', id: '4' },
  { value: 'ce', label: 'Ceará', id: '5' },
  { value: 'df', label: 'Distrito Federal', id: '6' },
  { value: 'es', label: 'Espírito Santo', id: '7' },
  { value: 'go', label: 'Goiás', id: '8' },
  { value: 'ma', label: 'Maranhão', id: '9' },
  { value: 'mt', label: 'Mato Grosso', id: '10' },
  { value: 'ms', label: 'Mato Grosso do Sul', id: '11' },
  { value: 'mg', label: 'Minas Gerais', id: '12' },
  { value: 'pa', label: 'Pará', id: '13' },
  { value: 'pb', label: 'Paraíba', id: '14' },
  { value: 'pr', label: 'Paraná', id: '15' },
  { value: 'pe', label: 'Pernambuco', id: '16' },
  { value: 'pi', label: 'Piauí', id: '17' },
  { value: 'rj', label: 'Rio de Janeiro', id: '18' },
  { value: 'rn', label: 'Rio Grande do Norte', id: '19' },
  { value: 'rs', label: 'Rio Grande do Sul', id: '20' },
  { value: 'ro', label: 'Rondônia', id: '21' },
  { value: 'rr', label: 'Roraima', id: '22' },
  { value: 'sc', label: 'Santa Catarina', id: '23' },
  { value: 'sp', label: 'São Paulo', id: '24' },
  { value: 'se', label: 'Sergipe', id: '25' },
  { value: 'to', label: 'Tocantins', id: '26' },
];

const render = (args: DropdownProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: space[2],
      width: '320px',
      padding: space[6],
      borderRadius: radii.md,
    }}
  >
    <Dropdown {...args} />
  </Box>
);

export const Primary: StoryObj<DropdownProps> = {
  args: {
    label: 'Estados',
    data: defaultData,
  },
  render,
};
