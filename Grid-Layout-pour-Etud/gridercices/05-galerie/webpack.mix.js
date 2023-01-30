// webpack.mix.js
const mix = require('laravel-mix');

mix.js('src/js/main.js', 'js/main.js').sourceMaps()
  .sass('src/scss/main.scss', 'css').sourceMaps()
  .setPublicPath('dist').setResourceRoot('../')
  .browserSync({
    proxy: false,
    server: {
      baseDir: './'
    }
  });

