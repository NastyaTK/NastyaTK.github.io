let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("default", function () {
    console.log(10);
})

gulp.task("scss", function () {
    return gulp.src(["src/*.scss"])
        .pipe(sass())
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./dist"))
})

gulp.task("scss:watch", function () {
    gulp.watch("./**/*.scss", gulp.series('scss'));
})