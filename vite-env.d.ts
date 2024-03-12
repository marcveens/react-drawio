/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GH_PAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}