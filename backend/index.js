const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    fs.readFile(`${__dirname}/backend/data.json`, "utf-8", (err,data) => {
        console.log(data);
        res.end(data);
    });
})

server.listen(3000, () => {
    console.log("server listening at port 3000");
});