// import http, {ServerResponse , IncomingMessage} from "http"

// const port:number = 5000

// const Server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
//     res.writeHead(200);
//     res.write ('server done')
//     res.end()
// })

// Server.listen(port , () =>{
//     console.log(`listening on port: ${port}`);
    
// 





// import http , {ServerResponse , IncomingMessage} from "http"
// import fs from "fs"
// import path from "path"

// const port: number= 4000

// const Server = http.createServer((req: IncomingMessage , res: ServerResponse <IncomingMessage>) =>{
//     res.writeHead(200);
    
//     let connect: string = "site/"

//     switch (req.url){
//         case "/":
//             connect += "home.html";
//             res.statusCode = 200;
//             break;

//             case "/about":
//                 connect += "about.html";
//                 res.statusCode = 200;
//                 break;

//                 case "/contact":
//                 connect += "contact.html"
//                 res.statusCode = 200;

//                 default:
//                     connect += "404.html"
//                     res.statusCode = 404;
//                     break
//     }

//     fs.readFile (path.join(__dirname, connect), (err, data) =>{
//         if(err) {
//             console.log("Anm Error Occured" , err);
//             res.end();

//         }else{
//             res.write(data)
//             res.end()
//         };
//     });
// });

// Server.listen(port, () =>{
//     console.log("");
//     console.log("Server Is Listening to port on port" , port);
// })

import http , {IncomingMessage, ServerResponse} from "http"
import fs from "fs"
import path from "path"

const port: number = 4000;

const Server = http.createServer((req:IncomingMessage , res: ServerResponse <IncomingMessage>)=>{
    res.writeHead(200)

    let connect: string = "site/"

    switch(req.url){
        case "/":
        connect += "home.html";
        res.statusCode= 200;
        break;

        case "/about":
            connect += "about.html";
            res.statusCode = 200;
            break;

            case "/service":
                connect += "service.html"
                res.statusCode = 200
                break;

            case "/contact":
                connect += "connect.html";
                res.statusCode = 200;
                break;

                default:
                  connect += "404.html"

    }
                  fs.readFile(path.join(__dirname , connect), (err , data)=>{
                    if(err){
                        console.log("Error Has Occur" , err);
                    }else{
                        res.write(data)
                        res.end()
                    }
                  })

                  

    
})


Server.listen(port, () =>{
    console.log("");
    console.log("Server Is Listening to port on port" , port);
})








































// const Dataset = [
//     {
//         id: "2",
//         name: "Topper",
//         stake: "graet"
//     },
//     {
//         id: "1",
//         name: "Ayo",
//         stake: "half stake"
//     },
//     {
//         id: "0",
//         name: "Ahmed",
//         stake: "none"
//     },
//     {
//         id: "3",
//         name: "Ekene",
//         stake: "Full stake"
//     },
// ]

// const server = http.createServer(
//     (req: IncomingMessage , res: ServerResponse <IncomingMessage>)=>{

//         if (req.url === "/" && req.method === "GET4" && res.statusCode === 200){
//             res.setHeader ("Content-Type" , "application/json");
//             res.write(JSON.stringify(Dataset));
//             res.end()
//         }
//         res.end();
//     })

//     server.listen(port, ()=>{
//         console.log("done");
        
//     })