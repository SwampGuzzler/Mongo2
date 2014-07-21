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
      all: {
        src: 'app.js',
        dest: 'dist/client.js'
      },
    },
    uglify: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.js': ['<%= browserify.dest %>']
        }
      }
    }
  });
 
  // Load plug-ins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
 
  // define tasks
  grunt.registerTask('default', [
    'jshint', 'mochaTest'
  ]);
  grunt.registerTask('build', [
    'browserify', 'uglify'
  ]);
};