module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['next', 'next/core-web-vitals', 'xo', 'xo-typescript', 'xo-react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'react/jsx-tag-spacing': 0,
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': 0,
		'@typescript-eslint/triple-slash-reference': 0,
		'@typescript-eslint/indent': 0,
	},
	ignorePatterns: ['**/*.js'],
};
