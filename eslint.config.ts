// eslint.config.ts

import tseslint from "typescript-eslint";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";

export default [
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/*config.ts",
            "eslint.config.*",
        ],
    },

    // js.configs.recommended,

    // Vue recommended flat config
    ...vue.configs["flat/recommended"],

    {
        files: ["client/**/*.{ts,vue}"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                project: "./client/tsconfig.json",
                extraFileExtensions: [".vue"],
                ecmaVersion: 2021,
                sourceType: "module",
            },
        },
        ...tseslint.configs.recommended,

        plugins: {
            "@typescript-eslint": tsPlugin,
        },
    },

    {
        files: ["server/**/*.js"],
        // ...js.configs.recommended,
    },

    prettier,
];
