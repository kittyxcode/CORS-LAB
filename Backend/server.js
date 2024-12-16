const express = require('express');
const cors = require('cors');
const app = express();

/*app.use((req, res, next)=>{
    res.append ('Access-Control-Allow-Origin', '*')
    res.append('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    //res.append ('Access-Control-Allow-Headers', 'Content-Type')
    next()
})*/

app.use(cors());

app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.listen(3000);
console.log('server on port 3000');
