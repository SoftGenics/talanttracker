var session = require('express-session');
const express = require('express');
const cookie=require('cookie-parser');

const app = express();
app.use(cookie());

app.use(cookie());
var MemoryStore =session.MemoryStore;

const oneDay = 1000 * 60 * 60 * 24;
app.use(session(
  {
  
    secret:"asdlkljkhjgfgfsfdssfsfsfshhkjhlklg",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false,
    store: new MemoryStore(),
        saveUninitialized: true
}));
