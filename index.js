const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'Kawai') {
   // message.reply('pong');
    message.channel.sendMessage('hi');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SINGING I ' LL BE THERE"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'HYUNJ1N');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

bot.login('NDA4NTU3NjU4NDMwMjQyODE3.DVR90g.HF-0HAbcunolG_KMRRn3BBoQuCs');
