## Node.js

### [Gulp](http://gulpjs.com/) - Automate and enhance your workflow

모던 워크플로우 빌드 툴: 업무 향상을 위한 자동화 도구

-

#### 1. Gulp 전역 설치:

```sh
$ npm install --global gulp # npm i -g gulp
```

#### 2. 프로젝트에서 사용할 Gulp 로컬 모듈 설치:

```sh
$ npm install --save-dev gulp # npm i -D gulp
```

#### 3. 프로젝트 루트 경로에 `gulpfile.js` 생성:

```js
var gulp = require('gulp');

// Gulp 기본 업무(Default Task) 등록
gulp.task('default', function() {
  // 기본 업무 작성
});
```

#### 4. 명령창에서 `gulp` 명령 실행:

```sh
$ gulp # gulp default
```

-

## Gulp API

바로가기:
  [gulp.task](#gulptaskname-deps-fn) |
  [gulp.src](#gulpsrcglobs-options) |
  [gulp.dest](#gulpdestpath-options) |
  [gulp.watch](#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb)

### gulp.task(name[, deps], fn)

업무(Task)를 정의할 때 사용한다.

```js
gulp.task('sass', function() {
	// 업무 등록
});
```

### gulp.src(globs[, options])

glob 문법(문자열, 배열)으로 소스 파일을 제공할 때 사용한다.
플러그인 파이프([piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options) to Plugins)를 통과하기 위한 [Vinyl files](https://github.com/wearefractal/vinyl-fs)의 [stream](http://nodejs.org/api/stream.html)을 반환한다.

```js
gulp.src('./sass/**/*.(sass,scss)')
```

### gulp.dest(path[, options])

파이프를 통과한 결과를 목적지에 생성(Write files to Destination)한다.

```js
gulp.src('./sass/**/*.(sass,scss)')
  .pipe(sass())
  .pipe( gulp.dest('./css/') );
```

### gulp.watch(glob[, opts, cb])

파일의 변경 사항을 감지하여 등록된 업무를 처리한다.

```js
gulp.watch(['./sass/**/*.(sass,scss)'], ['sass']);
```

-

### 참고 자료
- [플러그인 목록](http://gulpjs.com/plugins/)
- [Gulp Documentation](http://gulpjs.org/API.html)
- [Gulp 한국어 참조 문서](https://github.com/preco21/gulp-docs-ko)

