import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express(); // express application 생성
const logger = morgan("combined");
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`); // GET /
//     next();
// }
const privateMiddleware = (req, res, next)=> {
    const url = req.url; 
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue");
    next();
}
const handleHome = (req, res) => {
    return res.end(" I love middlewares ");
}

const handleProtected = (req, res) =>{
    return res.send("Welcome to the private lounge");
}
app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome); // root 로 get request를 보내면 콜백함수를 실행함
app.get("/protected", handleProtected);
const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🌈`);

app.listen(PORT, handleListening); // 몇번 port

