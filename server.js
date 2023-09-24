const express = require('express');
const scrapdata = require('./fetchData.js')

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/student/placed', async(req, res) => {
    try {
        let data = await scrapdata();
        res.send(data)
    }
    catch(err){
    	console.log('getting error')
    }
})


app.listen(PORT,()=>{
    console.log(`server running on PORT: ${PORT}`)
})