module.exports = {
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-console': 0,
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
};