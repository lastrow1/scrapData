const express = require('express');
const scrapdata = require('./fetchData.js')
var cors = require('cors')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())

app.get('/api',(req,res)=>{
    res.send('Hello from moon...')
})


app.get('/', async(req, res) => {
    try {
        let data = await scrapdata();
        console.log(data)
        res.send(data)
    }
    catch(err){
    	console.log('getting error')
    }
})


app.listen(PORT,()=>{
    console.log(`server running on PORT: ${PORT}`)
})