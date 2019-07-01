var express = require('express');
var app = express();

const Gpio = require('onoff').Gpio;


app.get('/tueroeffnen', function (req, res) {
    const led = new Gpio(5, 'out');       // Export GPIO17 as an output

    console.log(led.read());
    
    res.status(200).send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

