'use strict';
const express=require('express');

const server = express();

const PORT = process.env.PORT || 3000;


http://localhost:3000/test
// server.get('/test',(request,response)=>{
// response.send('hiiii');
// });

// http://localhost:3000/data

// server.get('/data',(request,response)=>{
//     console.log('server concted at :',PORT);

// });
server.use(express.static('./public'));
server.listen(PORT,()=>{
    console.log('hiiiiii',PORT);

});