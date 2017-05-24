var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var beers = [
    {   
        "id": "1",
        "name": "Mojo",
        "type": "IPA"
    },
    {   
        "id": "2",
        "name": "Fat Tire",
        "type": "Amber"
    },
    {   
        "id": "30000",
        "name": "Blue Paddle",
        "type": "Pilsner"
    }
]

app.get('/', function (req, res) {
  res.send('Welcome to the Taproom!')
})

// app.get('/beers', function (req, res) {
//   res.json(beers)
// })

app.listen(port, function () {
  console.log('Taproom API listening on port ' + port)
})