import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { builtinModules } from "node:module";

const nodeBuiltInModules = builtinModules.filter((m) => !m.startsWith("_"));
nodeBuiltInModules.push(...nodeBuiltInModules.map((m) => `node:${m}`));

export default defineConfig({
  plugins: [tsconfigPaths()],
  optimizeDeps: {
    exclude: nodeBuiltInModules,
  },
  build: {
    rolldownOptions: {
      external: nodeBuiltInModules,
    },
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
  },
});
