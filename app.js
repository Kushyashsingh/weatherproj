const express = require('express')
const BodyParser = require('body-parser')
const https = require('https')
const app = express()

app.use(BodyParser.urlencoded({extended: true  }))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
    app.post("/",function(req,res)
    {
        const query = req.body.city
    const url ="https://api.openweathermap.org/data/2.5/weather?q= "+query +"&appidba98ccb0bc80166282cc563cd5567a51";

    https.get(url,function(response){
        console.log(response.statusCode)

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const WDes = weatherData.weather[0].description;
            res.write("weather is currently"+ WDes);;
            res.send();
            })
        })
    })

app.listen(4000,function(){
    console.log('Server is UP')
}) 