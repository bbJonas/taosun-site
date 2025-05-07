import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://www.taosun.de",
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de"
  }
});
