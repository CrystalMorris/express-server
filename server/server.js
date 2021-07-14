const crystalsServer = require('express')
const path = require('path')

const app = crystalsServer()

const port = 3000

app.use(crystalsServer.static(path.join(__dirname,'public')))

app.get('/flipcoin', async (req, res)=>{
   
    let result =  Math.round(Math.random());
        if(result === 0){
            result = "heads"
        } else {
            result ="tails"
        }
    console.log(result)
    res.json(result)
    })


app.listen(port, ()=>{
    console.log(`The server is up and running on http://localhost:${port}`)
})