/**
 * ----------------------------------------------------------------
 * 환경설정
 * ----------------------------------------------------------------
 */
var config = {
    // Jade
    'jade': {
        'pretty': true
    },
    // Sass
    'sass_engine': process.env.sass || 'ruby', // 'node' or 'ruby'
    'sass': {
        // compact, compressed, nested, expanded
        'outputStyle' : 'expanded',
    },
    'ruby_sass': { // 옵션: Git Bash or Terminal ⇒ sass -h
        'defaultEncoding'  : 'UTF-8',    // Windows 환경에서 CP949 오류 발생 시
        'style'            : 'expanded', // compact, compressed, nested, expanded
        'sourcemap'        : true,
        // 'compass'          : true,
        // 'require'          : ['bourbon', 'susy'],
        // 'no-cache'         : true
    },
    'ruby_sass_sourcemaps': {
        'dir': 'maps',
        'options': {
            'includeContent' : false,
            'sourceRoot'     : 'source',
        },
    },
    'compass' : {
        'style'   : 'expanded',
        'css'     : 'dist/css',
        'sass'    : 'src/sass',
        'image'   : 'dist/images',
        'require' : ['bourbon', 'susy']
    },
    // 브라우저 리스트 참고 URL: https://github.com/ai/browserslist#queries
    'autoprefixer': [
        '> 1%',
        'last 2 versions'
    ],

    // Browser-sync
    'browserSync': { // 옵션: http://www.browsersync.io/docs/options/
        'server'  : ['dist'],
        'port'    : 8888,
        'notify'  : false,
    }
};

module.exports = config;