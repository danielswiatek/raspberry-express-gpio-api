var express = require('express');
var app = express();

const Gpio = require('onoff').Gpio;
const relaisRight = new Gpio(5, 'out');   


app.get('/tueroeffnen', function (req, res) {
      // Export GPIO17 as an output
    let stopBlinking = false;

    // Toggle the state of the LED connected to GPIO17 every 200ms
    const blinkLed = () => {
        if (stopBlinking) {
        return relaisRight.unexport();
        }

        relaisRight.read()
        .then(value => relaisRight.write(value ^ 1))
        .then(_ => setTimeout(blinkrelaisRight, 200))
        .catch(err => console.log(err));
    };

    blinkrelaisRight();

    // Stop blinking the LED after 5 seconds
    setTimeout(_ => stopBlinking = true, 5000);
    res.status(200).send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

