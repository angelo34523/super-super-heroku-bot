const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

},
'!roll': {
execute: roll,
description: 'roll from 1-100'
      

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
