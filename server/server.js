const crystalsServer = require('express')

const app = crystalsServer()

const port = 3000

app.use(crystalsServer.static('../public'))

app.listen(port, ()=>{
    console.log(`The server is up and running on http://localhost:${port}`)
})