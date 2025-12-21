// server.js

import express from "express";
import router from "./Routers/StudentRouter.js";

const app = express();

app.use(express.json()); // REQUIRED for POST data

app.use("/api", router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
