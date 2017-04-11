//Pulling in the http package
var http = require("http");


// This is where the server will be listening. LISTENER
var PORT1 = 7000;
var PORT2 = 7500;


function handleRequestOne(request, response)
{
	//This will be triggered when the user goes to our port.


	response.end("Ich lebe dich");
}

function handleRequestTwo(request, response)
{
	response.end("Du bist ein Schwein.");
}


//Create our servers
var server = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

//Start it up!
server.listen(PORT1, function()
{
console.log("Server is listening on port: " + PORT1);
})

serverTwo.listen(PORT2, function()
{
console.log("Server is listening on port: " + PORT2);
})


// Instructions
// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!


// var kong = ["Gigan","Rodan","Godzilla","King Kong"];

// for (var i = 0; i <= kong.length; i++)
//  {
// 	response.end("<p>" + kong[i])
// };