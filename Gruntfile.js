module.exports = function(grunt) {
 
  // configure grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
 
    jshint: {
      files: [
        '**/*.js',
        '!node_modules/**/*',
        '!browser/dist/**/*',
        '!browser/test/**/*',
        '!src/**/*'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    // run the mocha tests via Node.js
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    browserify: {
      standalone: {
        src: [ '<%= pkg.name %>.js' ],
        dest: './browser/dist/<%= pkg.name %>.standalone.js',
        options: {
          bundleOptions: {
            standalone: '<%= pkg.name %>'
          }
        }
      },
    }
  });
 
  // Load plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
 
  // define tasks
  grunt.registerTask('default', [
    'jshint', 'mochaTest'
  ]);
  grunt.registerTask('build', [
    'browserify'
  ]);
};