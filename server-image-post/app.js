const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req,res)=>{
    res.send({
        token: 'login123'
    })
})

app.listen(4000, ()=>console.log('running on port on 4000'))