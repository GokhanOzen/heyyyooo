const Discord = require("discord.js");
exports.run = (client, message) => {
  const asreaperEmbed = new Discord.MessageEmbed()

   .setTitle("👽 Yardım Komutları")
  .setDescription('**Beter Eğlence ve Moderasyon Botu**')
  .setColor("RANDOM")
    .setImage("")
  .addField("**🍓 !ping**","Ping değerlerini gösterir")
  .addField("**🍓 !ping+**","Detaylı bot istatiklerini gösterir",)
  .addField("**🍓 !avatar**","Avatar gösterir",)
  .addField("**🍓 !davet**","Botun davet linkini gösterir",)
  .setFooter(',davet ile beni davet edebilirsin')
  
  return message.channel.send(asreaperEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "ekstra",
  description: ".",
  usage: ""
};