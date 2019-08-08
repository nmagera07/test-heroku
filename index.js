// will run (listen for connections) the server
//programmer's terminology
// separation of concerns(SoC)
// single responsibility principle (SRP)

const server = require('./api/server');


// heroku adds a PORT variable to the environment automatically
// every environment variable in node will be in the process.env object
const port = process.env.PORT || 8004
server.listen(port, () => {
    console.log(`API running on ${port}`)
})