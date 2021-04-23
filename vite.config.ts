import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
   base: "/baidu",
   resolve: {
      alias: {
      },
   },
   plugins: [
      vue(),
      styleImport({
         libs: [{
            libraryName: "element-plus",
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
               const newName = name.slice(3);
               return `element-plus/packages/theme-chalk/src/${newName}.scss`;
            },
            resolveComponent: (name) => `element-plus/lib/${name}`,
         }],
      }),
   ],
});
