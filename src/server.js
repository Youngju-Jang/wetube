import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoeRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express(); // express application 생성
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter); 
app.use("/videos", videoRouter);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🌈`);

app.listen(PORT, handleListening); // 몇번 port

