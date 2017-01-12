var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify")

var contrlsArr = [

    "app/configs/rootController.js",
];
gulp.task("concatCtrls",function(){
    return gulp.src(contrlsArr).pipe(concat("com.bili.controllers.js")).pipe(gulp.dest("app/controllers/"))
});


var serviceArr = [

    "app/configs/rootService.js"
];
gulp.task("concatservice",function(){
    return gulp.src(serviceArr).pipe(concat("com.bili.services.js")).pipe(gulp.dest("app/services/"))
});


var directiveArr = [
    "app/configs/rootDirective.js"
];
gulp.task("concatDirective",function(){
    return gulp.src(directiveArr).pipe(concat("com.bili.directives.js")).pipe(gulp.dest("app/directives/"))
});



gulp.task("watch",function(){
    gulp.watch("app/configs/**/*",["concatCtrls","concatservice","concatDirective"]);
    gulp.watch("app/controllers/**/*",["concatCtrls"]);
    gulp.watch("app/services/**/*",["concatservice"]);
    gulp.watch("app/directives/**/*",["concatDirective"]);
});

