import express from "express";
import Connection from "./database/db.js";
import Route from "./routes/route.js";

const app = express();
app.use("/", Route);

const PORT = 8000;
Connection();

app.listen(PORT, () => {
  console.log(`server is running on PORT : ${PORT}`);
});
