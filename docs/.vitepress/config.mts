import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "",
  titleTemplate: false,
  description: "개발블로그",
  themeConfig: {
    siteTitle: "oy.dev",
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Examples", link: "/markdown-examples" }],

    sidebar: [
      {
        text: "이력서",
        link: "https://www.thegithubshop.com/",
      },
      {
        text: "내생각",
        items: [
          // { text:''}
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    // socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
