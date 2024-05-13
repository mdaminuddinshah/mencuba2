import express from "express";
import notFound from "./controller/notFound.js";
import getHealth from "./controller/health.js";
import { databaseConnection } from "./database/DBint.js";
import { upload } from "./controller/uploadFile.js";
import uploadData from "./middleware/upload.js";

const app = express();
const PORT = 1004;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

databaseConnection();

app.get("/", getHealth);

app.post("/upload", uploadData.single("images") , upload);

app.use(notFound);
app.listen(PORT);