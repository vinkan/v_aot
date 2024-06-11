import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };
const config = {
    input: 'src/main.js',
    output: [
        // {
        //     file: 'output/bundle.js',
        //     format: 'es',
        //     name: 'v_aot'
        // },
        {
            file: 'output/bundle.min.js',
            format: 'es',
            name: 'v_aot',
            plugins: [terser()]
        }
    ],
    plugins: [json()],
    external: Object.keys(pkg.dependencies || {}),
    exports: {
        ".": {
            "require": "./output/bundle.min.js",
            "import": "./output/bundle.min.js"
        },
        "./output/bundle.min.js": "./output/bundle.min.js"
    },
}
export default config