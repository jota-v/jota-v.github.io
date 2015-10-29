'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  grunt.loadNpmTasks('grunt-media-query-extractor');
  grunt.loadNpmTasks('grunt-comment-media-queries');

  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    config: config,

    watch: {
      babel: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['babel:dist']
      },
      babelTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['babel:test', 'test:watch']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: ['<%= config.app %>/{,*/}*.html'],
        tasks: ['inline','atomizer','mqe']
      },
      stylus: {
        files: ['<%= config.app %>/styles/{,*/}*.{styl,css}'],
        tasks: ['stylus', 'postcss']
      }
    },

    browserSync: {
      options: {
        notify: false,
        background: true,
        open: false,
        browser: 'Google Chrome',
        watchOptions: {
          ignored: ''
        }
      },
      livereload: {
        options: {
          files: [
            '.tmp/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= config.app %>/images/{,*/}*',
            '.tmp/scripts/{,*/}*.js'
          ],
          port: 9009,
          server: {
            baseDir: ['.tmp', config.app],
            routes: {
              '/bower_components': './bower_components',
              '/node_modules': './node_modules'
            }
          }
        }
      },
      test: {
        options: {
          port: 9001,
          open: false,
          logLevel: 'silent',
          host: 'localhost',
          server: {
            baseDir: ['.tmp', './test', config.app],
            routes: {
              '/bower_components': './bower_components'
            }
          }
        }
      },
      dist: {
        options: {
          background: false,
          server: '<%= config.dist %>'
        }
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/{,*/}*.js',
        '!<%= config.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= browserSync.test.options.host %>:<%= browserSync.test.options.port %>/index.html']
        }
      }
    },

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: '{,*/}*.js',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.js',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },

    atomizer: {
      task: {
        options: {
          config: {
            breakPoints: {
              'sm': '@media(min-width:480px)',
              'md': '@media(min-width:768px)',
              'lg': '@media(min-width:1024px)'
            },
            custom: {
              //Greys
              '$grey-1': '#171717',
              '$grey-2': '#232323',
              '$grey-4': '#424242',
              '$grey-6': '#616161',
              '$grey-9': '#9E9E9E',
              '$grey-b': '#BDBDBD',
              '$grey-e': '#EEEEEE',
              '$grey-f': '#F5F5F5',

              // Color
              '$brandMain': '#4E3FB5',
              '$brandSecondary': 'rgb(0,188,212)',

              // fonts
              '$Fz-base': '14px',
              '$Fz-xsm': '10px',
              '$Fz-sm': '12px',
              '$Fz-lg': '18px',
              '$Fz-xlg': '27px',
              '$Fz-xxlg': '58px',
              '$Ff-primary': '"Lato", Helvetica, Arial, sans-serif',

              // Layout
              '$gutter': '15px'
            }
          }
        },
        files: [{
          src: '.tmp/*.html',
          dest: '<%= config.app %>/styles/_atomizer.css'
        }]
      }
    },

    stylus: {
      options: {
        compress: false,
        path: '.',
        'include css': true,
        relativeDest: '.tmp/styles'
      },
      dist: {
        files: {
          'main.css': '<%= config.app %>/styles/main.styl',
          'main__large.css': '<%= config.app %>/styles/main__large.styl'
        }
      }
    },

    mqe: {
      options: {
        log: true
      },
      your_target: {
        files: {
          '<%= config.app %>/styles': ['<%= config.app %>/styles/_atomizer.css']
        }
      }
    },

    'comment-media-queries': {
      options: {
        // log: true
      },
      your_target: {
        files: {
          '<%= config.app %>/styles/_atomizer-min-width-768px.css': ['<%= config.app %>/styles/_atomizer-min-width-768px.css'],
          '<%= config.app %>/styles/_atomizer-min-width-1024px.css': ['<%= config.app %>/styles/_atomizer-min-width-1024px.css']
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
          })
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: 'dist/styles/'
        }]
      }
    },

    inline: {
      options: {
        uglify: true
      },
      dist: {
        files: {
          '.tmp/index.html': ['<%= config.app %>/index.html'],
          '.tmp/about.html': ['<%= config.app %>/about.html'],
          '.tmp/work.html': ['<%= config.app %>/work.html'],
          '.tmp/contact.html': ['<%= config.app %>/contact.html']
        }
      }
    },

    filerev: {
      dist: {
        src: [
          '<%= config.dist %>/scripts/{,*/}*.js',
          '<%= config.dist %>/styles/{,*/}*.css',
          '<%= config.dist %>/images/{,*/}*.*',
          '<%= config.dist %>/fonts/{,*/}*.*',
          '<%= config.dist %>/*.{ico,png}'
        ]
      }
    },

    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '.tmp/index.html'
    },

    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/images',
          '<%= config.dist %>/styles'
        ]
      },
      html: ['.tmp/{,*/}*.html'],
      css: ['<%= config.dist %>/styles/{,*/}*.css']
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    cssnano: {
      options: {
        sourcemap: false,
        autoprefixer: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles',
          dest: '<%= config.dist %>/styles',
          src: 'main.css'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: false,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.webp',
            '{,*/}*.html',
            'fonts/{,*/}*.*'
          ]
        }]
      }
    },

    concurrent: {
      server: [
        'babel:dist',
        'stylus'
      ],
      test: [
        'babel'
      ],
      dist: [
        'babel',
        'stylus',
        'imagemin',
        'svgmin'
      ]
    },
    'gh-pages': {
      options: {
        base: 'dist',
        branch: 'master',
        message: 'Auto-generated deploy to prod'
      },
      src: ['**']
    }
  });


  grunt.registerTask('serve', 'start the server and preview your app', function (target) {

    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'inline',
      'atomizer',
      'mqe',
      'stylus',
      'postcss',
      'browserSync:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      grunt.task.run([
        'clean:server',
        'concurrent:test',
        'postcss'
      ]);
    }

    grunt.task.run([
      'browserSync:test',
      'mocha'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'inline',
    'atomizer',
    'mqe',
    'comment-media-queries',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'concat',
    'cssnano',
    'uglify',
    'copy:dist',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:eslint',
    'test',
    'build'
  ]);
};
