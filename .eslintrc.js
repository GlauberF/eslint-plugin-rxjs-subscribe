module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ["eslint:recommended"],
    plugins: ["rxjs-subscribe"],
    rules: {
        "no-undef": 0,
        "rxjs-subscribe/require-takeuntil-or-first-on-subscribe": [
            2,
            {
                include: ["subscribe"],
                exclude: [],
                message: "Subscription without takeUntil or first is not allowed.",
            },
        ],
    },
};
