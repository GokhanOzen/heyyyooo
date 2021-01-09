const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Beter Yardım Menüsü")
.setThumbnail("")
.setDescription(`


> **» !oynat :** Belirtilen link veya müzik adını oynatır,
> **» !durdur :** Müziği tamamen durdurur,
> **» !atla :** Bir sonraki müziğe geçer,
> **» !devam :** Duraklatılan müziği devam ettirir,
> **» !duraklat :** Müziği sonradan devam etmek üzere durdurur,
> **» !döngü :** Müziği sürekli tekrarlar,
> **» !karıştır :** Sıraya eklenen şarkıları karışık çalmaya başalar,
> **» !kuyruk :** Sırada bekleyen müzikleri gösterir,
> **» !kuyruk-temizle :** Sıradaki şarkıları siler,
> **» !ses :** Botun ses seviyesini ayarlar,

**Örnek kullanım: !oynat <Müzik adı veya linki> \n !ses <İstenilen ses seviyesi> **
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
    name: '!music', 
    description: 'The Help Command',
    usage: 'help'
};