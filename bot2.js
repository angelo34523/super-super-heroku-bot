import discord
import asyncio
import random

client = discord.Client()

@client.event
async def on_ready ():
    print ('BOT ONLINE - Ola Mundo!')
    print (client.user.name)
    print (client.user.id)
    print ('----------BM--------')


@client.event
async def on_message (message):
    if message.content.lowet().startswith('!test'):
        await client.send_message(message.channel, "Ola mundo, estou vivo.")


    if message.content.lowet().startswith('!moeda'):
      choice = random.randint(1,2)
      if choice == 1:
       await client.add_reaction(message, 'ðŸ˜€')
      if choice == 2:
       await client.add_reaction(message, 'ðŸ¤´')



      
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
