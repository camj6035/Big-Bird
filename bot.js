const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
    console.log('I\'m Online\nI\'m Online');
});

var prefix = "~"
client.on('message', message => {
    if (message.author === client.user) return;
   let args = message.content.split(' ').slice(1);
   var argresults = args.join (' ');
   if (message.author.bot) return;
  
   if (message.content.startsWith(prefix + 'help')) {
       message.channel.sendMessage('the commands are:')
       message.channel.sendMessage('FUS')
       message.channel.sendMessage('setgame')
   }
  
  
   if (message.content.startsWith(prefix + 'FUS')) {
       message.channel.sendMessage('RO DAH');
   } else

   if (message.content.startsWith(prefix + 'setgame')) {
       if (!argresults) argresults = null;
       client.user.setGame(argresults)
   }else





client.login(process.env.BOT_TOKEN)});
