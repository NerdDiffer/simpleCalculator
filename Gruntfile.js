module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    recess: {
      dev: {
        options: {
          compile: true,
          noIDs: false,
          noUnderscores: false
        },
        src: ['dev/less/*.less'],
        dest: 'pub/styles/styles.css'
      }
    },
    jshint: {
      all: ['dev/src/*.js, Gruntfile.js, package.json']
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
  grunt.registerTask('default', 'recess');
};
