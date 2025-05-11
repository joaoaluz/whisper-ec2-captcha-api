// esbuild.config.js
const esbuild = require('esbuild');
const glob = require('glob');

const utilsFiles = glob.sync('src/utils/**/*.js');

esbuild.build({
  entryPoints: [
    'src/app.js', 
    ...utilsFiles, 
  ],
  bundle: true,
  platform: 'node',
  target: 'node14',
  outdir: 'dist',
  sourcemap: true,
  minify: false,
}).catch(() => process.exit(1));
