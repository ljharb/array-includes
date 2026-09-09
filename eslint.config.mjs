import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		rules: {
			'id-length': [
				'error', {
					max: 26,
					min: 1,
				},
			],
			'new-cap': [
				'error', {
					capIsNewExceptions: [
						'GetIntrinsic',
						'RequireObjectCoercible',
						'SameValueZero',
						'ToIntegerOrInfinity',
						'ToLength',
						'ToObject',
					],
				},
			],
		},
	},
	{
		files: ['test/**'],
		rules: {
			'max-lines-per-function': 'off',
			'no-invalid-this': 'warn',
		},
	},
];
