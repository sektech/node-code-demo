const EventEmitter = require("events");
const http = require("http");

class MyClass extends EventEmitter {
  constructor() {
    super();
  }
}

const MyEvents = new MyClass();

MyEvents.on("ButtonClick", () => {
  setTimeout(() => {
    console.log("Button is clicked, I am waiting for the click");
  }, 5000);
});

MyEvents.on("addition", (a, b) => {
  console.log("the addition :" + (a + b));
});

MyEvents.emit("ButtonClick");

MyEvents.emit("addition", 23, 45);
////////////////

const server = http.createServer();

server.on("close", () => {
  console.log("server is closed");
});

server.on("request", (req, resp) => {
  console.log(req.url);
  resp.end("server is running");
});

server.listen(8002, "0.0.0.0", () => {
  console.log("this is server listening");
});
