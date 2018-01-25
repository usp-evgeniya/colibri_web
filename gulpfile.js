const gulp = require('gulp'),
    //styles
    sass = require('gulp-sass'),
    nodeSass = require('node-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss')
    pxtorem = require('postcss-pxtorem'),
    //scripts
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    webpack = require('webpack'),
    gulpWebpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config.js'),
    jshint = require('gulp-jshint'),
    lintConfig = require('./lint.config.js'),
    babel = require('gulp-babel');
    //templates
    pug = require('gulp-pug'),
    //build
    del = require('del'),
    browserSync = require('browser-sync').create(),
    //sprite
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    svgSprite = require('gulp-svg-sprite'),
    svgMin = require ('gulp-svgmin');
    
    

var paths = {
    styles: {
        src: 'src/styles/styles.scss',
        watch: 'src/styles/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        watch: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    },
    templates: {
        src: 'src/templates/pages/*.pug',
        watch: 'src/templates/**/*.pug',
        dest: 'dist/'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'dist/img/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'dist/fonts/'
    },
    icons: {
        src: 'src/images/icons/**/*.svg',
        dest: 'dist/img/icons'
    }
}

var plugins = [
    pxtorem({
        replace: false,
        propList: ['*'],
        minPixelValue: 3
    })
]

function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        browsers : ['last 4 versions'],
        cascade : false
    }))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(jshint(lintConfig))    
    .pipe(jshint.reporter('default')) 
    .pipe(babel({presets: ['env']}))
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest));
}



function templates() {
    return gulp.src(paths.templates.src)
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.templates.dest));
}

function images() {
    return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
    return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}


const config = {
    mode: {
        symbol: {
            sprite: "sprite.svg",
        }
    }
};


function sprite() {
    return gulp.src(paths.icons.src)
    .pipe(svgMin({
        js2svg: {
            pretty: true
        }
    }))
    .pipe(cheerio({
        run: function($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {
            xmlMode: true
        }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(config))
    .pipe(gulp.dest(paths.icons.dest));
}

function clean() {
    return del('dist')
}

function watch() {
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.scripts.watch, scripts);
    gulp.watch(paths.templates.watch, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.icons.src, sprite);
    gulp.watch(paths.fonts.src, fonts)
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    browserSync.watch(['./src/**/*.*', './dist/**/*.*'], browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.templates = templates;
exports.images = images;
exports.sprite = sprite;
exports.fonts = fonts;
exports.watch = watch;
exports.clean = clean;
exports.server = server;

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles,scripts,templates,images,sprite,fonts)
))

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles,scripts,templates,images,sprite,fonts),
    gulp.parallel(watch,server)
))

