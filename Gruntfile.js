module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                src: ['./app/js/app.js'],
                dest: 'build/bundle.js',
                options: {
                    watch: true,
                    keepAlive: true
                }
            },
            default: {
                src: ['./app/js/app.js'],
                dest: 'build/bundle.js',
                options: {
                }
            }
        },
        serve: {
            options: {
                port: 9000
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('dev-serve', ['browserify:dev', 'serve']);
    grunt.registerTask('dev', ['browserify:dev']);
    grunt.registerTask('default', ['browserify:default']);
};
