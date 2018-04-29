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
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

var commands = {
  '!video': {
    execute: getVideo,
    description: 'get a youtube video by search word'
  },
  '!weather': {
    execute: getWeather,
    description: 'get current weather for the given city, defaults to Stockholm'
  },
  '!roll': {
    execute: roll,
    description: 'roll from 1-100'
  },
  '!help': {
    execute: showHelp
  },
  '!words': {
    execute: countWordsByUser,
    description: 'get the most popular words for user of the given username, defaults to your username'
  },
  '!queue': {
    execute: doQueue,
    description: 'queue your song'
  },
  '!voteskip': {
    execute: voteSkip,
    description: 'vote to skip the current song'
  },
  '!song': {
    execute: showSong,
    description: 'get the current song'
  }
};



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
