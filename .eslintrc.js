module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module',
	},
	'plugins': [
		'vue',
		'@typescript-eslint',
	],
	'globals': {
		'module': true,
		'defineProps': true,
		'describe': true,
		'test': true,
		'expect': true,
	},
	'rules': {
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'always',
		],
		'comma-dangle': [
			'error',
			'only-multiline',
		],
	},
};
