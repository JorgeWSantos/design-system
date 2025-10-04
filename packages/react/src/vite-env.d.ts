/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_CONSULTA_ANIMAL: string;
  // add more env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
