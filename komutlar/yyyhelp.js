const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Help menu 🍂")
.setThumbnail("")
.setDescription(`


> **» !topic :** *Shows global commands,*
> **» !moderation :** *For a regular environment,*
> **» !guard :** *Protects against attacks on the server*
> **» !comedy :** *Fun and chill with commands,*
> **» !music :** *Shows music commands,*
> **» !person :** *Personal commands,*
> **» !extra :** *Extra commands,*
> **» !wholuxr :** *Introducing luxr,*
> **» !problem :** *If you have a problem,*

**» Links** 
**[Support Team](https://discord.gg/zrc63yA)** **•** **[İnvite Link](https://discordapp.com/oauth2/authorize?client_id=708413383451344936&scope=bot&permissions=0)** 
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'help', 
    description: 'The Help Command',
    usage: 'help'
};