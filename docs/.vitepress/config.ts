import { defineConfig } from "vitepress";
import nav from "./nav.json";

export default defineConfig({
  title: "docs",
  themeConfig: {
    nav,
  },
});
