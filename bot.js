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

client.on('message', message => {
    if (message.content === '!angelbot') {
	message.reply('Ola, eu sou o angelbot desenvolvido por angelo gabriel kkk, voce deve tar se perguntando oque eu fasso certo? e eu te respondo nada!!!');
  	}
	
	
@client.on
async def on_ready ():
    print ('BOT ONLINE - Ola Mundo!')
    print (client.user.name)
    print (client.user.id)
    print ('----------BM--------')


@client.on
async def on_message (message):
    if message.content.lower().startswith('!test'):
        await client.send_message(message.channel, "Ola mundo, estou vivo.")


    if message.content.lower().startswith('!moeda'):
      choice = random.randint(1,2)
      if choice == 1:
       await client.add_reaction(message, 'ðŸ˜€')
      if choice == 2:
       await client.add_reaction(message, 'ðŸ¤´')

	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
