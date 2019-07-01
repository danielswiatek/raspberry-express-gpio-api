var express = require('express');
var app = express();

const Gpio = require('onoff').Gpio;
const led = new Gpio(3, 'out');
led.write(1);


app.get('/tueroeffnen', function (req, res) {
      // Export GPIO17 as an output
    led.write(0);
    setTimeout(() => {
      led.write(1);
    }, 3000)
    

    // Toggle the state of the LED connected to G PIO17 every 200ms
    /*const blinkLed = () => {
        if (stopBlinking) {
        return led.unexport();
        }

        led.read()
        .then(value => led.write(value ^ 1))
        .then(_ => setTimeout(blinkLed, 200))
        .catch(err => console.log(err));
    };

    // Stop blinking the LED after 5 seconds
    setTimeout(_ => stopBlinking = true, 5000);*/
    res.status(200).send('Aus');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

