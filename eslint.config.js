// eslint.config.js

module.export = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'prettier/prettier': 'error'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    }
];
