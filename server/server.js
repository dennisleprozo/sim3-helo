require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
// const bcrypt = require('bcryptjs');
const authCtrl = require('./authCtrl')


const app = express();
// app.use(bodyParser.json());
app.use(express.json())
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

massive(CONNECTION_STRING).then(db => app.set("db", db));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);

app.post('/auth/signup', authCtrl.signup)
app.post('/auth/login', authCtrl.login);

app.get('/api/user-data', authCtrl.userData);
app.get('/auth/logout', authCtrl.logout);

app.listen(SERVER_PORT, () => console.log(`Eavesdropping on SERVER_PORT: ${SERVER_PORT}`));


// async function checkForUser(req, res, next) {
//   const db = req.app.get('db')
//   const existingUser = await db.check_existing_user(req.body.username)
//   if (existingUser[0]) {
//     next();
//   } else {
//     res.status(401).send('Username not found');
//   }
// } 

// app.post('/auth/login', checkForUser, async (req, res) => {
//   const db = req.app.get('db')

//   const {username, password, isAdmin} = req.body;
//   const existingUser = await db.check_existing_user(req.body.username)

// let result = bcrypt.compareSync(password, existingUser[0].hash);

//   if(password === existingUser[0].hash) {
//     res.status(200).send('Welcome Back');
//   } else {
//   res.sendStatus(403).send('Incorrect Password')
// }
// })

// app.post('/auth/register', checkForUser, async (req, res) => {
//   const db = req.app.get('db')

//   const {username, password, isAdmin} = req.body;
//   const existingUser = await db.check_existing_user(req.body.username)
// //if existing don't register
//   let result = bcrypt.compareSync(password, existingUser[0].hash);

//   if(!password === !existingUser[0].hash) {
//     res.status(200).send('Registered');
//   } else {
//   res.sendStatus(403).send('')
// }


//   res.sendStatus(200)
// })









