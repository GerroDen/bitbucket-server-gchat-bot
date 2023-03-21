export default {
	resetMocks: true,
	resetModules: true,
	rootDir: "./src",
	setupFilesAfterEnv: ["jest-extended/all"],
	transform: {
		// "\\.tsx?$": ["esbuild-jest", { sourcemap: true }],
		// switched to swc until issue with jest.mock is fixed: https://github.com/aelbore/esbuild-jest/issues/54
		"\\.[jt]sx?$": "@swc/jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},
	reporters: ["default"],
	coverageDirectory: "<rootDir>/../reports",
}
