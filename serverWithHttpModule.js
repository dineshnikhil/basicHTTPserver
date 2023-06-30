const http = require('http');
const PORT = 3000;

/**
 * Http module contains a function called as createServer
 * this create server function takes a callback as the input
 * now inside the callback, we get two arguments
 * - request -> this arrument contains all the details about the incoming req
 * - response -> this argument contains functions using which we can prepare the response
 *
 * the createServer function returns us the server Object.
 */

const server = http.createServer(function exec(request, response) {
	if (request.url === '/home') {
		response.end('wellcome to the home page');
	} else if (request.url === '/faq') {
		response.end('you may find the needed faqs here');
	} else {
		response.end('Hello World!');
	}
});

server.listen(PORT, function process() {
	console.log('servering is running on the port', PORT);
});
