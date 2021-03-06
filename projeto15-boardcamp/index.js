import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";
import chalk from "chalk";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(chalk.bgGreenBright(`mode: ${process.env.MODE || "not defined -> DEV"}`));
  console.log(chalk.bgGreenBright(`server is up and running on port ${port}`));
});