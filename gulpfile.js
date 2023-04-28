// gulpfile.js
var gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');    //合并

const { series } = require('gulp') 
// const del = require('del')

// gulp.task("sass", function() {
//     gulp.src(["/*.scss"])
//         .pipe(sass()) // 转成CSS
//
//         // .pipe(cssmin()) // 压缩
//         .pipe(gulp.dest('./dist')); // 在当前目录下的lib文件夹输出最终文件
// });

gulp.task("sass", function() {
    gulp.src(["node_modules/element-plus/theme-chalk/src/index.scss", 'src/theme.scss'])
        .pipe(sass()) // 转成CSS
        // .pipe(cssmin()) // 压缩
        .pipe(gulp.dest('./dist')); // 在当前目录下的lib文件夹输出最终文件
});

// gulp.task("css", function () {
//     gulp.src(["dist/theme.css"])
//         .pipe(concat('dist/index.css'))
//         .pipe(gulp.dest('./dist/css')); // 在当前目录下的lib文件夹输出最终文件

// })


gulp.task('clean', () => {
    return del(['./dist/**'])
})
gulp.task('build', gulp.series([
    'sass'
]));
const pro = series('clean', 'build')
gulp.task('pro', gulp.series(['build'], (done) => {
    done()
}))
