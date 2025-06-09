# @abqm-ds/react

Componentes React do Design System ABQM.

Este pacote fornece componentes reutilizáveis, acessíveis e estilizados para uso em aplicações React, seguindo o padrão visual da ABQM.

---

## 📦 Instalação.

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
  ...

---

## 💡 Como Usar

Importe e utilize os componentes normalmente:

```tsx
import { Button, ToastProvider, useToast } from '@abqm-ds/react';

function App() {
  const { showToast } = useToast();

  return (
    <ToastProvider>
      <Button onClick={() => showToast('Olá!', 'success')}>Clique aqui</Button>
    </ToastProvider>
  );
}
```

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
