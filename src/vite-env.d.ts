/// <reference types="vite/client" />

// figma:asset import 타입 정의
declare module "figma:asset/*" {
  const content: string;
  export default content;
}

// 환경 변수 타입 정의
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_CONTACT_PHONE?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_ENABLE_ANALYTICS?: string;
  readonly VITE_ENABLE_CHAT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
