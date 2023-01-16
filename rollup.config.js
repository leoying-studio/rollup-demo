
const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const noderesolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel");
const commonjs = require('@rollup/plugin-commonjs')
const json = require("@rollup/plugin-json")

function resolve() {
    const cwd = process.cwd()
    return path.resolve(cwd, ...arguments);
}

module.exports = {
    input: [resolve("src/index.ts")],
    output: [
        {
            file: "dist/bundle-cjs.js",
            format: 'cjs',
        },
        {
            file: "dist/bundle-umd.js",
            format: 'cjs',
        }
    ],
    plugins: [
        noderesolve(),
        commonjs(),
        typescript(),
        json(),
        babel({ babelHelpers: 'bundled' })
    ]
}