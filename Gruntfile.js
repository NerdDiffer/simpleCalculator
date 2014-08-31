module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    recess: {
      options: {
        noIDs: false
      },
      lint: {
        src: 'dev/less/*.less'
      },
      lintCompile: {
        options: {
          compile: true
        },
        files: {
          'pub/styles/styles.css': 'dev/less/*.less' 
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
    concat: {
      options: {

      },
      allFiles: {
        files: {
          'pub/js/script.js': ['dev/js/genTable.js', 'dev/js/genDiv.js', 'dev/js/util.js', 'dev/js/input.js']
        }
      },
      genCalc: {
        files: {
          'pub/js/generate.js': ['dev/js/genTable.js', 'dev/js/genDiv.js']
        }
      },
      inputUtil: {
        files: {
          'pub/js/inputUtil.js': ['dev/js/util.js', 'dev/js/input.js']
        }
      }
    },
    watch: {
      recess: {
        files: 'dev/less/*.less',
        tasks: 'recess:lintCompile'
      }, 
      genCalc: {
        files: 'dev/js/gen*.js',
        tasks: 'concat:genCalc' 
      }, 
      inputUtil: {
        files: ['!dev/js/gen*.js', 'dev/js/input.js', 'dev/js/util.js'],
        tasks: 'concat:inputUtil'
      }
      //browserify: {
      //  files: 'dev/js/script.js', 
      //  tasks: 'browserify:compile'
      //}
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask('test', 'recess:lint', 'jshint:dev');
};
