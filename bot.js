const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'vidaloka') {
    	message.reply('VIADO!!!');
  	}
});

});

mybot.on("message", function(message) {
    if (message.content === "_live") {
        getJSON("https://api.twitch.tv/kraken/streams/lalicel", function(err, res) {
            if (res.stream == null) {
                mybot.reply(message, "she is currently not live");
            } else {
                mybot.reply(message, "she is currently live");
				mybot.sendMessage(message, "https://www.twitch.tv/lalicel");
            }
});
        

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
