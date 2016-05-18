var tasks = require('./lib/tasks');

module.exports = function(grunt) {
  var taskConfig = tasks();
  taskConfig.pkg = grunt.file.readJSON('package.json');
  grunt.initConfig(taskConfig);

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint');

  // tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask('lint', [
    'lesslint:lint',
    'jshint:dev'
  ]);
  grunt.registerTask('build', [
    'lint',
    'less:compile',
    'concat:generate',
    'concat:inputUtil'
  ]);
};
