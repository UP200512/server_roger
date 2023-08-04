import  express  from "express";
import { createPool} from 'mysql2/promise'

const app = express()
const pool = createPool({
    host: 'mysqldb',
    port: 3306,
    user: "pablo",
    password: "cr7messi"
})

app.get('/',   (req, res) => {
    
    res.json("hello world from docker")
})
app.get('/ping', async (req, res) => {
    const sql= "select now() as 'date';"
    const [rows]= await pool.query(sql);

    res.json(rows)
})
app.listen(3050, (req, res) => {
    console.log("server on port 3050")
})