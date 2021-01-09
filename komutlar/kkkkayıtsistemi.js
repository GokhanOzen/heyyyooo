const Discord = require("discord.js");
exports.run = (client, message) => {
  const asreaperEmbed = new Discord.MessageEmbed()

   .setTitle("👽 Eğlence Komutları")
  .setDescription('**Eğlenmek veya zaman geçirmek için kullanabileceğiniz komutlar**')
  .setColor("RANDOM")
    .setImage("")
  .addField("**🎻 ,erkek-role @roletiket - ,erkek-role-kapat","Bunları yaparak erkek rolünü seçebilir veya kapatabilirsiniz")
  .addField("**🎻 ,kadın-role @roletiket - ,kadın-role-kapat","Bunları yaparak kadın rolünü seçebilir veya kapatabilirsiniz",)
  .addField("**🎻 ,yetkili-role @roletiket - ,yetkili-role-kapat**","Kullanıcıları kayıt edebilecek bir yetkili rolü belirtmelisiniz.",)
  .addField("**🎻 ,kayıtsız-role @roletiket - ,kayıtsız-role-kapat**","Bunları yaparak ilk kez kayıt olacak kişinin rolünü belirleyebilirsiniz",)
  .addField("**🎻 ,sunucu-kayıt-log #kanaletiketle - ,sunucu-kayıt-log-kapat**","Sunucuya kaydolan kişinin bilgisinin atılacağı kanalı belirleyebilirsiniz",)
  .addField("**🎻 ,admin-istatistik @kişietiket**","Birini seçip kaç kişi kayıt etmiş diye bakabilirsiniz",)
  .setFooter(',erkek @kişietiket',',kadın @kişietiket')
  
  return message.channel.send(asreaperEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıts"],
  permLevel: 0
};

exports.help = {
  name: "kayıts",
  description: ".",
  usage: ""
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıts"],
  permLevel: 0
};
exports.help = {
  name: 'kayıts',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};