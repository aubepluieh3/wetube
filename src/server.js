import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
};

const handleHome = (req, res, next) => {
    return res.send("I love middlewares");
};


app.get("/", logger, handleHome);
const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //외부 접속 listen