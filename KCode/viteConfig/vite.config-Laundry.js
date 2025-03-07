import { build ,normalizePath} from 'vite';

import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import { StartFunc as getFilesForVite } from "./getFilesForVite.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonSrcFolder = "src/Index/FrontEndLaundry";
const commonDistFolder = "public";

let filesForVite = getFilesForVite({ inSrcPath: commonSrcFolder });

build({
    configFile: false,
    build: {
        emptyOutDir: false,
        outDir: resolve(__dirname, commonDistFolder),
        lib: {
            name: 'app',
            formats: ['umd'],
            fileName: 'app',
            entry: `${commonSrcFolder}/js/app.js`,
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
});

export default {
    publicDir: 'static',
    base: './',
    root: resolve(__dirname, `../../${commonSrcFolder}`),
    plugins: [
        viteStaticCopy({
            targets: [
                { src: normalizePath(resolve(__dirname, `../../${commonSrcFolder}/js`)), dest: "" }
            ],
            watch: {
                reloadPageOnChange: true
            }
        }),
    ],
    build: {
        emptyOutDir: false,
        manifest: true,
        target: "chrome58",
        outDir: resolve(__dirname, `../../${commonDistFolder}`),
        rollupOptions: {
            input: filesForVite,
            output: {
            }
        },
    },
    server: {
        port: 8080
    }
}
