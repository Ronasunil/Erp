import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import "express-async-errors";
import { config } from "dotenv";

const app = express();
config({ path: "./config.env" });

app.use(express.json());
app.use(helmet());
app.use(hpp());

const api = process.env.API_VERSION;

app.listen(3001, () => {
  console.log("server started");
});
