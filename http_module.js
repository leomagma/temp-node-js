const http = require('http');

const server = http.createServer((req,res)=>{
	if (req.url==='/') {
		res.end('Welcome to the Home Page')
	}
 	if (req.url === '/about'){
 		res.end('This is a little history about us.')
 	}

 	res.end(`
<h1>opps! the page you requested for is not available</h1>
`
 		)
})

server.listen(5000)