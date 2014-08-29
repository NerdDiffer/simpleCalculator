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
        src: 'dev/js/*.js' 
      },
      runner: {
        src: ['Gruntfile.js', 'package.json'] 
      }
    },
    watch: {
      recess: {
        //tasks: ,
        //files: 
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // tasks
  grunt.registerTask('default', ['recess:lintCompile', 'jshint:all']);
};
