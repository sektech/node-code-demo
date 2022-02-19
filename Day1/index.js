const fs = require('fs');
const http = require('http');
const url = require('url');

/*
const inputText = fs.readFileSync('./Test.txt', 'utf-8');
console.log(inputText);
fs.writeFileSync('./TestOutput.txt', 'This is appended' + inputText);

*/
const fileData = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const fileJsonData = JSON.parse(fileData);

fs.readFile('./Test.txt', (err, data) => {
    if (err) { console.log('error');console.log(err); }
    if (data) { console.log('valid');console.log(data) } ;

})

const server = http.createServer((req, resp) => {
    const pathName = req.url;
    if (pathName == "/overview" || pathName == "/self") {
        resp.end("This is from overview");
        
    }
    else if (pathName == '/API') {
        console.log(fileData);
        resp.end(fileData);

    }
    else if (pathName == "/product")
    {
        console.log("prodcut");
        resp.end("this is from product");
    } else {
        resp.writeHead(404, "Page not found");
        resp.end("page not found");
        }
    
   // console.log(req.url); 
})
server.listen(8002, '0.0.0.0', () => {
    console.log("this is from server");
});