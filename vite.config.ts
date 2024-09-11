import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	build: {
		outDir: "./build",
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData:
					"@import './src/styles/variables.scss'; @import './src/styles/mixins/index.scss';",
			},
		},
		modules: {
			localsConvention: "dashes",
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	server: {
		port: 3000,
	},
});
