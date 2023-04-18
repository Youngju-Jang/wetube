import express from "express";

const PORT = 4000;
const app = express(); // express application 생성

const handleHome = (req, res) => {
    return res.send("HI");
}
const handleLogin = (req, res) => {
    return res.send("Login Here");
}
app.get("/", handleHome); // root 로 get request를 보내면 콜백함수를 실행함
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🌈`);

app.listen(PORT, handleListening); // 몇번 port

