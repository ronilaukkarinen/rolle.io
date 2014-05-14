module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
       'js/all.js': [
       'js/jquery-1.9.0.min.js',
       'js/modernizr.min.js',
       'js/jquery.lifestream.min.js',
       'js/jquery.timeago.min.js',
       'js/jquery.smallipop.min.js',
       'js/scripts.min.js' ],
        }
      }
    },
    watch: {
      files: ['<%= uglify.files %>'],
      tasks: ['uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['uglify']);

  grunt.registerTask('default', ['uglify']);

};