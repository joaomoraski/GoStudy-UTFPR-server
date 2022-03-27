module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "overrides": [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension

            // As mentioned in the comments, you should extend TypeScript plugins here,
            // instead of extending them outside the `overrides`.
            // If you don't want to extend any rules, you don't need an `extends` attribute.
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            "parserOptions": { "project": ["./tsconfig.json"] },
        }
    ],
    "rules": {
        "no-await-in-loop": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-dupe-args": "error",
        "no-irregular-whitespace": "error",
        "no-self-compare": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "use-isnan": "error",
        "eqeqeq": "error",
        "no-empty": "error",
        "spaced-comment": "error",
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "no-multiple-empty-lines": "error"
    }
}
