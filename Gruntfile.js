module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    recess: {
      dev: {
        src: ['styles/style.css', 'styles/responsive.css'],
        options: {
          noIDs: false,
          noUnderscores: false
        }
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

  // tasks
  grunt.registerTask('default', 'recess:dev');
};
