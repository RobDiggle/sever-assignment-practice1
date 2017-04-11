//Pulling in the http package
var http = require("http");


// This is where the server will be listening. LISTENER
var PORT = 8080;

function handleRequest(request, response)
{
	//This will be triggered when the user goes to our port.
// var kong = ["Gigan","Rodan","Godzilla","King Kong"];

// for (var i = 0; i <= kong.length; i++)
//  {
// 	response.end("<p>" + kong[i])
// };

	response.end("IT WORKS!! Path hit: " +  request.url);

}

//Create our server
var server = http.createServer(handleRequest);

//Start it up!
server.listen(PORT, function()
{
console.log("Server is listening on port: " + PORT)







})

// Instructions
// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!