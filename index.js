// will run (listen for connections) the server
//programmer's terminology
// separation of concerns(SoC)
// single responsibility principle (SRP)

const server = require('./api/server');

const port = 8004
server.listen(port, () => {
    console.log(`API running on ${port}`)
})