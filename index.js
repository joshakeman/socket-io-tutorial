const app = require('express')()
const http = require('http').createServer(app)

app.get('/', function(req, res){
    res.send('<h1>Yooooo</h1>')
})

http.listen(3000, () => {
    console.log('listneing on port 3000')
})