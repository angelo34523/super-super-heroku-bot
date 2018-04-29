
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'vidaloka') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!angelbot4') {
	message.reply('Ola, eu sou o angelbot desenvolvido por angelo gabriel kkk, voce deve tar se perguntando oque eu fasso certo? e eu te respondo nada!!!');
  	}
});
      
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
