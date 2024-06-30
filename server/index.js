import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"; // Import the CORS package

const app = express();
const port = 5000;
const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "Project",
  password : "Vivek2005",
  port : 5432
});//change password whenever committed

db.connect();//db connection

app.use(cors()); // Use the CORS middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON request bodies

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

//vivek starts here
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    await db.query("INSERT INTO login (email, password) VALUES ($1, $2)", [email, password]);
    var email2=await email.replace("@","_");
    const dbcreate=`CREATE TABLE stocks_${email2}(name varchar(100) not null,qty INT DEFAULT 1,price INT not null,buydate DATE)`;
    await db.query(dbcreate);
    console.log("success");
  } catch (err) {
    console.log(err);
    res.status(400).send("already registered");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query("SELECT * FROM login WHERE email = $1 AND password = $2", [email, password]);
    console.log("success");
    console.log(email,password);
    console.log(result.rows.length);
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post("/assetadd", async(req,res)=>{
  const {email,stockname, qty, price, buydate} = req.body;
  try {
    var email2=email.replace("@","_");
    const queryy=`INSERT INTO stocks_${email2}(name,qty,price,buydate) VALUES (${stockname}, ${qty}, ${price}, ${buydate})`;
    await db.query(queryy);
    console.log("success");
    res.send("Successfully added");
  } catch (err) {
    console.log(err);
  }
})