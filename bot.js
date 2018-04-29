// Load Discord.js and make a new Discord.client
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
//Ping command
if(message.content === "gmping") {
message.channel.send('Pong!');
}

 

client.login(process.env.TOKEN);
