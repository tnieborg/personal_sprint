'use strict'

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
            },
        css: {
                files: ['./sass/**/*.scss'],
                tasks: ['sass', 'cssmin'],
            },
        }, 
        sass: {
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //different tasks
    grunt.registerTask('default', ['watch']);

};