const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("BLUE")
.setTitle("Beter Yardım Menüsü")
.setThumbnail("")
.setDescription(`


> **» ! :** ,
> **» ! :** ,
> **» ! :** ,
> **» ! :** ,
> **» ! :** ,
> **» ! :** ,
> **» ! :** ,
> **» ! :** ,
> **» ! :** ,


**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/zrc63yA)** **•** **[Botun Davet Linki](https://discordapp.com/oauth2/authorize?client_id=708413383451344936&scope=bot&permissions=0)** 
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
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'help'
};