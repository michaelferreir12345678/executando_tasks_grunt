module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './dev/styles/main.css' : './src/styles/main.less' 
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dev/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        },
        watch: {
            files: ['./src/**/*'],
            tasks: ['less', 'uglify1']
        },       
    }),

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}