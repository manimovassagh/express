const express=require('express')
const server = express()

server.listen(80,err=>{
    if (err) console.log(err);
    else console.log('Server is Working like butter');
})