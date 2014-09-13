module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    lesslint: {
      lint: {
        src: 'dev/less/*.less'
      },
    },
    less: {
      options: {
        path: 'dev/less',
        cleancss: true,
      },
      compile: {
        files: {
          'pub/styles/styles.css': ['dev/less/variables.less', 'dev/less/styles.less', 'dev/less/calc.less']
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
      generate: {
        files: {
          'pub/js/generate.js': 'dev/js/genTable.js'
        }
      },
      inputUtil: {
        files: {
          'pub/js/inputUtil.js': ['dev/js/util.js', 'dev/js/input.js']
        }
      }
    },
    watch: {
      lessCompile: {
        files: 'dev/less/*.less',
        tasks: ['lesslint:lint', 'less:compile']
      }, 
      generate: {
        files: 'dev/js/gen*.js',
        tasks: 'concat:generate' 
      }, 
      inputUtil: {
        files: ['!dev/js/gen*.js', 'dev/js/input.js', 'dev/js/util.js'],
        tasks: 'concat:inputUtil'
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint');

  // tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask('test', 'lesslint:lint', 'jshint:dev');
};
