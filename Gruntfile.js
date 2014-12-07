
module.exports = function(grunt) {

    var LIVERELOAD_PORT = 37729;

    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: '<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '*//*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> *//*\n'
            },
            dist: {
                files: {
                    '<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
                }
            }
        },
        watch: {
            //watch src for chances and build again...
            files: ['src/**/*.js'],
            tasks: ['build'],
            //setup livereload-server on port

        },
        /*connect: {
            options: {
                port: 9000,
                useAvailablePort:true,
                //keepalive:true,
                hostname:"*",
                //inject live-reload script into served html-files...
                livereload: LIVERELOAD_PORT
            },
            examples: {
                options: {
                    *//*middleware: function(connect,options) {
                        var middlewares=[];
                        //WTF? the base itself needs also to be included...
                        middlewares.push(connect.static(options.base[0]));
                        //app + dist ...
                        middlewares.push(mountFolder(connect,'app'));
                        middlewares.push(mountFolder(connect,'dist'));
                        return middlewares;
                    },*//*
                    base: ['examples',
                           'app',
                           'dist'],
                    open:true
                }
            }
        }*/
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-connect');

    //grunt.registerTask('test', ['jshint', 'qunit']);

    //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

    grunt.registerTask('build',['concat','uglify']);

    //grunt.registerTask('server',['build','connect:examples','watch']);

    //grunt.registerTask('release',['build'])

    grunt.registerTask('default',['watch']);

};
