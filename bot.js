const Discord = require('discord.js');
const client = new Discord.Client();


client = discord.Client()

client.event
async ()
    print(client.user.name)
    print("Bot online - Olá Mundo!")

client.event
async (message)
    if content.startswith('!entrar'):
      try:
        canal = message.author.voice.voice_channel
        await client.join_voice_channel(canal)
      except discord.errors.InvalidArgument:
             await client.send_message(message.channel, "Você precisa esta conectado a um canal de voz!")

    if message.content.startswith('!sair'):
      try:
        canaldevoz = client.voice_client_in(message.server)
        await canaldevoz.disconnect()
      except AttributeError:
          await client.send_message(message.channel,"O bot não esta conectado em nenhum canal de voz!")



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
