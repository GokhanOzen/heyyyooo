const Discord = require("discord.js");
exports.run = (client, message) => {
  const asreaperEmbed = new Discord.MessageEmbed()

   .setTitle("👽 Yardım Komutları")
  .setDescription('**Beter Eğlence ve Moderasyon Botu**')
  .setColor("RANDOM")
  .setImage("https://cdn.discordapp.com/attachments/709427380069859390/758711308643336222/krmz_lane.gif")
  .addField("**🍧 !**","a",)
  .addField("**🍧 !**","a",)
  .addField("**🍧 !**","a",)
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
  name: "guard",
  description: ".",
  usage: ""
};