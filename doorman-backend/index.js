const express = require('express')
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = 8000;

const { exec } = require("child_process");

const token = '1849138573:AAGru5zHNP1knBnev_BJ9SCrGUO6TDik2oY';
const bot = new TelegramBot(token, { polling: true });
let chatId = '';

app.get('/', (req, res) => {
    res.send('Welcome to Doorman!')
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
    bot.sendMessage(chatId, '🚪 Türe geöffnet!');
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
    bot.sendMessage(chatId, '🚘 Garage geöffnet!');
    res.send('Garage opened');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

bot.on('message', (msg) => {
    chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Chat aktualisiert!');
});