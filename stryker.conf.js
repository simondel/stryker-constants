module.exports = function (config) {
	config.set({
		coverageAnalysis: "off",
		htmlReporter: {
			baseDir: 'docs/mutation'
		},
		jest: {
			config: require('./jest.config.js'),
			projectType: 'custom'
		},
		loglevel: "debug",
		mutate: [
			'src/**/*.ts',
			'!src/**/*.spec.ts'
		],
		mutator: "typescript",
		packageManager: "npm",
		reporters: ["html", "progress"],
		testRunner: "jest",
		transpilers: [],
		tsconfigFile: "tsconfig.json"
  });
}
