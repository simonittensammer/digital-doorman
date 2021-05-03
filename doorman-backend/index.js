const express = require('express')
const app = express();
const port = 8000;

const { exec } = require("child_process");

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/openDoor', (req, res) => {
    exec("gpio -g write 12 0", (error, stdout, stderr) => {
        console.log('door open');
    });

    const timeoutObj = setTimeout(() => {
        exec("gpio -g write 12 1", (error, stdout, stderr) => {
            console.log('door close');
        });
    }, 1500);

    res.send('Door opened');
});

app.get('/openGarage', (req, res) => {
    exec("gpio -g write 16 0", (error, stdout, stderr) => {
        console.log('garage start');
    });

    const timeoutObj = setTimeout(() => {
        exec("gpio -g write 16 1", (error, stdout, stderr) => {
            console.log('garage stop');
        });
    }, 250);

    res.send('Door opened');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});