// Load Discord.js and make a new Discord.client
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
//Console log if the bot started succesfully
console.log('Bot has started with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.');
//Set bot playing game status
client.user.setActivity('In ${client.guilds.size} servers | gmhelp');
});

client.on("guildCreate" , guild => {
//When bot joined a guild, trigger;
console.log('I joined a guild: ${guild.name} with the id: ${guild.id} and ${guild.memberCount} members!');
client.user.setActivity('In ${client.guilds.size} servers | gmhelp');
});

client.on("guildDelete" , guild => {
//When bot removed from a guild, trigger:
console.log('I have been removed from a guild: ${guild.name} with the id: ${guild.id} and ${guild.memberCount} members!');
client.user.setActivity('In ${client.guilds.size} servers | gmhelp');
});

client.on("message", message => {
if(message.author.bot) return;

//Ping command
if(message.content === "gmping") {
message.channel.send('Pong!');
}

//Say command
if(command === "gmsay") {
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{});
message.channel.send(sayMessage);
}

//Invite command
 if(command = "gminv") {
  message.channel.send("Invite me to your server with this link! https://discordapp.com/oauth2/authorize?&client_id=398960627592331264&scope=bot&permissions=8");
 }
 
//Help command
if(command === "gmhelp") {
 message.channel.send("Hello " + message.author.toString() + "! I see you need help! Here are some commands that you can try:");
 message.channel.send("gmhelp - This help message");
 message.channel.send("gmsay - Make the bot say something (Example: gmsay hi)");
 message.channel.send("gmping - Ping!");
 message.channel.send("gminv - Invite me to a server!");
  }
});
// Login
client.login(process.env.TOKEN);
