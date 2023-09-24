const http = require("http")
// const { Server } = require("https")
// const { BroadcastChannel } = require("worker_threads")

// const PORT = 2000

// const app = http.createServer((req, res) => {
//     res.writeHead(200)
//     res.write ("server is up and running ")
//     res.end()
// })

// app.listen(PORT , () => {
//     console.log("port is up and listening");
// })


const HOST = 4000

const myApp = http.createServer((request , response ) =>{
    if (request.url === "./"){
        response.writeHead (200, {"content-type" : "text/html"});
        response.write(`<html><body><p>This is my hom</p></body></html>`);

        response.end();
    }else if (request.url === "./page"){
        response.writeHead (200, {"content-type" : "text/html"});
        response.write(`<html><body><p> Hey You Are At The Home Page</p></body></html>`)

        response.end();
    }else if (request === "./about"){
        response.writeHead (200, {"content-type" : "text/html"});
        response.write(`<html><body><p>Hey You Are At The Home Page</p></body></html>`)
    }
})

myApp.listen (HOST , () => {
    console.log("port is .......");
})