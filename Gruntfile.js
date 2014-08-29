module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    recess: {
      options: {
        noIDs: false
      },
      lint: {
        src: ['dev/less/*.less', '!dev/less/main.less' ]
      },
      lintCompile: {
        options: {
          compile: true
        },
        files: {
          'pub/styles/styles.css': 'dev/less/main.less' 
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'package.json', 'dev/js/*.js'],
      dev: {
        src: ['dev/js/*.js']
      },
      runner: {
        src: ['Gruntfile.js', 'package.json'] 
      }
    },
    browserify: {
      watch: {
        options: {
          watch: true,
          keepAlive: true
        },
        files: {
          'pub/js/script.js': 'dev/js/*.js'
        }
      }
    },
    watch: {
      recess: {
        files: ['dev/less/*.less', '!dev/less/main.less'],
        tasks: 'recess:lintCompile'
      },
      browserify: {
        files: 'dev/js/*.js',
        tasks: 'browserify:watch'
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask('test', 'recess:lint', 'jshint:dev');
};
