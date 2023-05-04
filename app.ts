import express from 'express';
import todoorutes from  './routes/todo'
import bodyParser from 'body-parser';


const app=express();

app.use(bodyParser.json());
app.use(todoorutes);

app.listen(3000);