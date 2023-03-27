// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
// browser-syncのプラグインの読み込み
// const browserSync = require("browser-sync");

// style.scssをタスクを作成する
gulp.task('sass',  () => {
  // style.scssファイルを取得
  return (
    gulp
      // コピー元フォルダーの指定
      .src("src/sass/style.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      // コピー先フォルダーの指定、cssフォルダー以下に保存
      .pipe(gulp.dest("./dist/css"))
  );
});


// style.scssの監視タスクを作成する
gulp.task("sass_watch", () => {
  // ★ style.scssファイルを監視
  return gulp.watch("src/sass/**/*.scss", () => {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return (
      gulp
        .src("src/sass/style.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded",
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("./dist/css"))
    );
  });
});


// // browser-syncのタスクの設定
// gulp.task("browserSyncTask", function () {
//     browserSync({
//       server: {
//         baseDir: "src", // ルートとなるディレクトリを指定
//       },
//     });
  
//     // srcフォルダ以下のファイルを監視
//     gulp.watch("src/**", function () {
//       browserSync.reload(); // ファイルに変更があれば同期しているブラウザをリロード
//     });
//   });


// gulp.task("default", gulp.task("sass_watch"), gulp.task("browserSyncTask"));