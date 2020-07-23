/* eslint-disable no-console */
const Rollup = require('rollup');
const Terser = require('terser');
const fs = require('fs');
const Path = require('path');

const pluginNode = require('@rollup/plugin-node-resolve').nodeResolve;
const pluginCommonjs = require('@rollup/plugin-commonjs');

const { version, main } = require('../package.json');
const banner = (
`/*!
 * SimpleCornFlakes v${version} - 2018-${new Date().getFullYear()}
 * MIT License. https://github.com/Loxoz/SimpleCornFlakes
 */
`);

const outputPath = './dist/';
const globalPlugins = [pluginNode(), pluginCommonjs()];

/** @type {Object<string, import('rollup').RollupOptions>} */
const builds = {
    'dev': {
        input: resolve(main),
        output: {
            file: resolve(Path.join(outputPath, 'SimpleCornFlakes.js')),
            format: 'umd',
            banner,
            name: "SimpleCornFlakes",
            exports: 'named'
        },
        plugins: [...globalPlugins]
    },
    'prod': {
        input: resolve(main),
        output: {
            file: resolve(Path.join(outputPath, 'SimpleCornFlakes.min.js')),
            format: 'umd',
            banner,
            name: "SimpleCornFlakes",
            exports: 'named'
        },
        plugins: [...globalPlugins]
    }
}

/**
 * @param {Object<string, import('rollup').RollupOptions} builds
 */
function build(builds) {
    if (!fs.existsSync(outputPath)) {
        console.log("Output path not found, creating...");
        fs.mkdir(outputPath, { recursive: true });
    }
    console.log("Building files...");
    for (let name in builds) {
        let config = builds[name];
        let { output } = config;
        let { file } = output;
        let minify = /min\.js$/.test(file);
        Rollup.rollup(config)
            .then(bundle => bundle.generate(output))
            .then(({ output: [{ code }] }) => {
                if (minify) {
                    const minified = Terser.minify(code, {
                        toplevel: true
                    }).code;
                    return write(file, minified, name);
                }
                else return write(file, code, name);
            }).catch(console.error);
    }
}

function write(path, code, chunkname) {
    const stream = fs.createWriteStream(path);
    stream.write(code);
    console.log(` Built ${chunkname ? chunkname + ' - ' : ''}${path}`);
    return stream;
}

function resolve(path) {
    return Path.resolve(__dirname, '..', path);
}

build(builds);
