import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as passport from "passport";
import * as dotenv from "dotenv";
import routes from "./routes";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("env file not found");
}

import "./middlewares/passport-jwt";
import "./middlewares/passport-local-strategy";

const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(passport.initialize());
app.use(routes);
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
