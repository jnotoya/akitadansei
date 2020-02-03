
const { src, dest, watch } = require("gulp");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");


const compilePug = () =>
  src(["src/pug/**/*.pug", "!src/pug/**/_*.pug"])
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"));

const compileStylus = () =>
  src(["src/stylus/**/*.styl"])
    .pipe(stylus({ pretty: true }))
    .pipe(dest("dist/css"))

const moveImage = () =>
  src(["src/assets/image/*"])
  .pipe(dest("dist/image"))

const watchFiles = () => {
  watch("src/pug/**/*.pug", compilePug);
  watch("src/assets/image/*", moveImage);
  watch("src/stylus/**/*.styl", compileStylus);
}

// npx gulpによりwatchFilesを実行
exports.default = watchFiles;
