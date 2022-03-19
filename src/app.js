
import express from "express";
import db from './database/sqlite.js'
import funcionarioController from "./controllers/funcionarioController.js";


const app = express()

app.use(express.json())

funcionarioController(app ,db)

export default app