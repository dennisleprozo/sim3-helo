require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require('./authCtrl')


const app = express();
// app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.json())
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

massive(CONNECTION_STRING).then(db => app.set("db", db));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);

app.post('/api/auth/signup', authCtrl.signup)
app.post('/api/auth/login', authCtrl.login);



app.get('/api/post/:id', authCtrl.getUserPosts);
app.post('/api/posts/:id', authCtrl.createUserPosts);
app.get('/api/posts/post/:postid', authCtrl.getSinglePost);



app.get('/api/user-data', authCtrl.userData);
app.get('/auth/logout', authCtrl.logout);





app.listen(SERVER_PORT, () => console.log(`Eavesdropping on SERVER_PORT: ${SERVER_PORT}`));










