const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./router/routes');


const app = express();
const port = 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }));
app.use(bodyParser.json());
app.use(express.json())

app.use("/",router)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// const Express =require('express')
// const app= Express()
// const cors = require('cors'); 
// require('dotenv').config();
// const cookieParser = require('cookie-parser'); 
// const router = require('./routes/index');
// const ConnectDB = require('./config/db')
// app.use(cookieParser());

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }));
// app.use(Express.json())

// app.use("/",router)