const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
// Creating an Express application
const app = express();

// Defining the port number
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// created the blogs array to mimic the database
var blogsArray = [];

// Handling GET requests to the root route
app.get('/blogs', function exe(req, res) {
	return res.status(200).json({
		blogs: blogsArray,
		success: true,
	});
});

// Handling POST requests of the blogs
app.post('/blogs', function exe(req, res) {
	blogsArray.push({
		id: uuidv4(), // generates unique id
		title: req.body.title,
		content: req.body.content,
	});

	return res.status(201).json({
		success: true,
	});
});

// Handling the GET request for the perticular blog
app.get('/blogs/:id', function exe(req, res) {
	const result = blogsArray.filter((blog) => {
		return blog.id === req.params.id;
	});

	return res.status(200).json({
		data: result,
		success: true,
	});
});

// Handling the DELETE request for the perticular blog
app.delete('/blogs/:id', function exe(req, res) {
	const result = blogsArray.filter((blog) => {
		return blog.id !== req.params.id;
	});
	blogsArray = result;

	return res.status(200).json({
		data: blogsArray,
		success: true,
	});
});

// Starting the server and listening on the specified port
app.listen(PORT, function process() {
	// Printing a message indicating that the server has started
	console.log('server started at port ', PORT);
});
