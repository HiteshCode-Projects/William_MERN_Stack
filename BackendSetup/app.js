//Step 1 : Importing the required modules
// require('module-name')

const express =   require('express')

//Step 2 : Creating an express application/function
// express() function is used to create an instance of an Express application. This instance can be used to set up middleware, define routes, and start the server.

const app = express()

//Backend works on two parameter - Request and Response. Request is the data sent by the client to the server, and Response is the data sent by the server back to the client.

//Step 3 : Defining a route/api

// app.methodName('/path-api addrrss'  , (req, res) => {
//      : Sending a response back to the client
//     res.send('Response data')
// })

//Get Method - Used to fetch or get  data from the server

app.get('/' , (req, res) => {
    res.send('Hello Wiliam, Welcome to Express JS')
})

//Step 4 : Starting the server and listening for incoming requests
// portNumber - 3000, 4000, 5000, 8000, 8080, 9000, 10000
// portnumber is a number that identifies a specific process or service on a computer. In the context of web development, a port number is used to identify a specific web server or application running on a computer. When a client (such as a web browser) sends a request to a server, it includes the port number in the request to indicate which service or application it wants to communicate with.

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000')
} )