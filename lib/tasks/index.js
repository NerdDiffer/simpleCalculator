/* jshint esnext: true */

const path = require('path');

const styles_src = 'app/assets/stylesheets'
    , js_src     = 'app/assets/js';

var pathTo = function (pathPrefix, fileOrGlob) {
  return path.join(pathPrefix, fileOrGlob);
};

var lesslint = {
  lint: {
    src: pathTo(styles_src, '*.less')
  }
};

var less = {
  options: {
    path: styles_src,
    cleancss: true,
  },
  compile: {
    files: {
      'pub/styles/styles.css': [pathTo(styles_src, 'variables.less'),
                                pathTo(styles_src, 'styles.less'),
                                pathTo(styles_src, 'calc.less')]
    }
  }
};

var jshint = {
  all: ['Gruntfile.js', 'package.json', pathTo(js_src, '*.js')],
  dev: {
    src: [pathTo(js_src, '*.js')]
  },
  runner: {
    src: ['Gruntfile.js', 'package.json']
  }
};

var concat = {
  generate: {
    files: {
      'pub/js/generate.js': pathTo(js_src, 'genTable.js')
    }
  },
  inputUtil: {
    files: {
      'pub/js/inputUtil.js': [pathTo(js_src, 'util.js'),
                              pathTo(js_src, 'input.js')]
    }
  }
};

var watch = {
  lessCompile: {
    files: pathTo(styles_src, '*.less'),
    tasks: ['lesslint:lint', 'less:compile']
  },
  generate: {
    files: pathTo(js_src, 'gen*.js'),
    tasks: 'concat:generate'
  },
  inputUtil: {
    files: ['!app/assets/js/gen*.js',
            pathTo(js_src, 'input.js'),
            pathTo(js_src, 'util.js')],
    tasks: 'concat:inputUtil'
  }
};

module.exports = function() {
  return {
    lesslint: lesslint,
    less: less,
    jshint: jshint,
    concat: concat,
    watch: watch
  };
};
