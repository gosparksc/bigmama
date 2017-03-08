axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
dynamic_content = require 'dynamic-content'
roots_yaml = require 'roots-yaml'

module.exports =
  ignores: ['README.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  locals:
    title: 'Spark SC',
    description: 'Innovators and entrepreneurs at the University of Southern California.'

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee', minify: true),
    css_pipeline(files: 'assets/css/*.styl', 'assets/css/lib/*.css', minify: true),
    roots_yaml(),
    dynamic_content(),
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true

  server:
    clean_urls: true
