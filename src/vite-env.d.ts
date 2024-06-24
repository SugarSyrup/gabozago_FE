/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
