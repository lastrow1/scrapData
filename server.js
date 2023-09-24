const express = require('express');
const scrapdata = require('./fetchData.js')

const app = express();



app.get('/student/placed', async(req, res) => {
    try {
        let data = await scrapdata();
        res.send(data)
    }
    catch(err){
    	console.log('getting error')
    }
})


app.listen('3000')