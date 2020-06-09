const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
//para acessar o banco de dados do mongoose
mongoose.connect('mongodb+srv://itamar:havenstein@cluster0-txcai.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(cors())
//deste modo estou abilitando na aplicação que ela entenda o formato json
app.use(express.json());
app.use(routes);

//MongoDb(Não Relacional)



app.listen(3333);
