const express = require('express')
const app = express();
const port = 8000;

const { exec } = require("child_process");

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/openDoor', (req, res) => {
    exec("gpio -g write 12 0", (error, stdout, stderr) => {
        // console.log('door open');
    });

    const timeoutObj = setTimeout(() => {
        exec("gpio -g write 12 1", (error, stdout, stderr) => {
            // console.log('door close');
        });
    }, 1500);
    
    console.log(Date.now() + ': Door opened');
    res.send('Door opened');
});

app.get('/openGarage', (req, res) => {
    exec("gpio -g write 16 0", (error, stdout, stderr) => {
        // console.log('garage start');
    });
    
    const timeoutObj = setTimeout(() => {
        exec("gpio -g write 16 1", (error, stdout, stderr) => {
            // console.log('garage stop');
        });
    }, 250);
    
    console.log(Date.now() + ': Garage opened');
    res.send('Garage opened');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});