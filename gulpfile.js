var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function () {
    var files = [
        './**/*'
    ];

    browserSync.init({
        port: 2019,
        files: files,
        server: {
            baseDir: "./"
        }
        /*proxy: "http://localhost:3000/"*/

    });
    gulp.on("change", reload);
});
gulp.task('default', ['serve']);