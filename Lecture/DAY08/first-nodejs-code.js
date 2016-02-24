// File System 모듈 호출
// Node.js 서버사이드 환경에서는 모듈 호출 시,
// CommonJS 진영의 모듈 로더를 사용 require()
var fs = require('fs');

fs.readFile('./index.html', 'utf8', function(err, data) {
	if (err) {
		console.error(err.message);
	}
	console.log(data);
});