import { defineConfig } from "vitepress";

export default defineConfig({
  title: "docs",
  lastUpdated: true,
  themeConfig: {
    outline: 2,
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/index" },
          { text: "Docs1", link: "/docs1" },
          { text: "Docs2", link: "/docs2" },
        ],
      },
    ],
  },
});
