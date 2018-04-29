const Discord = require('discord.js');
const client = new Discord.Client();
var Bot = new Discord.Client();
var Helper = require('./components/helper.js');
var Queue = require('./components/queue.js');
var TrackHelper = require('./components/trackhelper.js');
var WordService = require('./components/wordservice.js');
var WeatherService = require('./components/weatherservice.js');
var express = require('express')
var app = express()
var ver ="0.86"
var mybot = new Discord.Client();
var getJSON = require('get-JSON');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'junior') {
    	message.reply('VIADO!!!');
  	}
});      

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
