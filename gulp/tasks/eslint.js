import gulp from 'gulp';
import eslint from 'gulp-eslint';

export default (options) => {
    // The pluggable linting utility for JavaScript and JSX
    gulp.task('eslint', () => {
        let eslintConfig = options.config.eslint;

        return gulp.src(eslintConfig.src)
            // eslint() attaches the lint output to the eslint property
            // of the file object so it can be used by other modules.
            .pipe(eslint(eslintConfig.options))
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            // To have the process exit with an error code (1) on
            // lint error, return the stream and pipe to failOnError last.
            .pipe(eslint.failOnError());
    });
};
