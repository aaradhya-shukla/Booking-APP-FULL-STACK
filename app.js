const express = require('express');

const app = express();

var cors = require('cors');

const sequelize = require('./util/database');

const bodyParser = require('body-parser');

const book = require('./routes/book');

app.use(cors());

app.use(bodyParser.json());

app.use('/user',book);

sequelize.sync().
then(()=>{
    app.listen(3000)
}).
catch(err=>console.log(err));
