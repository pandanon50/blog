import type { Theme } from "vitepress";
import "./custom.scss";
import DefaultTheme from "vitepress/theme";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 사용자 지정 전역 컴포넌트를 등록하세요
    app.component("MyGlobalComponent" /* ... */);
  },
} satisfies Theme;
