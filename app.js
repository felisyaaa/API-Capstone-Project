const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const akunRouter = require('./route/router')
const functions = require('firebase-functions');
const port = 4000;

app.get('/', (req, res) => {
  res.json('message: hello world');
  res.status(200);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(akunRouter)

// app.listen(port, () => {
//   console.log(`server berjalan di port ${port}`);
// });

// express.api = (req,res)=>{
//   app(req,res)
// }



exports.app = functions.https.onRequest(app);