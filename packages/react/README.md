# @abqm-ds/react

Componentes React do Design System ABQM.

Este pacote fornece componentes reutilizáveis, acessíveis e estilizados para uso em aplicações React, seguindo o padrão visual da ABQM.

---

## 📦 Instalação

```bash
yarn add @abqm-ds/react
# ou
npm install @abqm-ds/react
```

---

## ✨ Componentes Disponíveis

- Box
- Button
- Text
- Heading
- Avatar
- TextInput
- TextArea
- Checkbox
- MultiStep
- ColorBar
- Footer
- Header
- RoundedButton
- SideMenu
- TopSideMenu
- UserDropdown
- Dropdown
- HeaderMobile
- Tooltip
- Modal
- Toast
- ErrorBoundary
  ...

---

## 💡 Como Usar

Importe e utilize os componentes normalmente:

```tsx
import { Button, ToastRoot, ErrorBoundary } from '@abqm-ds/react';

function App() {
  return (
    <ErrorBoundary>
      <ToastRoot />
      <Button text="Salvar" variant="primary" size="md" onClick={() => alert('ola')} />
    </ErrorBoundary>
  );
}
```

### ErrorBoundary

O `ErrorBoundary` captura erros de renderização em componentes filhos e exibe uma mensagem de fallback amigável.

#### Exemplo de uso:

```tsx
import { ErrorBoundary } from '@abqm-ds/react';

function BuggyComponent() {
  throw new Error('Erro de teste!');
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
```

- Use para evitar que erros de componentes quebrem toda a aplicação.
- O fallback padrão exibe a mensagem de erro e o stack trace.

---

## 📁 Estrutura

```bash
packages/react/
├── src/
│   ├── components/
│   ├── styles/
│   ├── types/
│   └── index.tsx
├── package.json
└── README.md
```

---

## 🤝 Contribuição

Para sugerir novos componentes ou melhorias, abra um PR ou entre em contato com o time de design.

---

## 📃 Licença

Este projeto é privado e pertence à ABQM. Uso externo é restrito.
