const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router.js');

const PORT = 5000; //порт, который прослушивает сервер
const urlConnectDB = 'mongodb+srv://Sinen:MMelnikovB_1403@cluster0.5mbrsrv.mongodb.net/?retryWrites=true&w=majority';
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);
app.use('/api', router); //использование роутера, который обрабатывает запросы к бд
startApp();

async function startApp(){
    try{
        await mongoose.connect(urlConnectDB, {useUnifiedTopology: true, useNewUrlParser: true}, () => console.log('Data base connection: successfull\n'));
        app.listen(PORT, () => console.log('Server running on port: ' + PORT));
    }
    catch(ex){
        console.log(ex);
    }
}