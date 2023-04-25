import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); // express application 생성
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router(); // /~

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router(); // /users/~

const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router(); // /videos/~

const handleWatchVideo = (req, res) => res.send("watch video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🌈`);

app.listen(PORT, handleListening); // 몇번 port

