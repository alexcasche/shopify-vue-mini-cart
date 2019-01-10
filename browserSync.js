const browserSync = require("browser-sync");
const BASE_URL = "https://alexcasche.myshopify.com";
const PREVIEW_QUERY = "?preview_theme_id=59857371200";

browserSync({
  proxy: `${BASE_URL}${PREVIEW_QUERY}`,
  files: "browserUpdate.js"
});
