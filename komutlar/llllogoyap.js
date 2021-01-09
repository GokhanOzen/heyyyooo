const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("Beter Logo Yapma Aracı")
.setThumbnail("")
.setDescription(`


> **» !arrow  :** Ok stilinde yazı yazar,
> **» !blue :** Mavi yazı yazar,
> **» !booking :** Kitap tarzında yazı yazar,
> **» !bubble :** Mavi baloncuk yazı,
> **» !bubble2  :** Turuncu baloncuk yazı,
> **» !bubble3  :** Rengarenk baloncuk yazı,
> **» !comic :** Konuşma balonu yazısı,
> **» !cool :** Havalı yazı,
> **» !discord :** Discord stilinde yazı yazar,
> **» !fire :** Ateşli yazı,
> **» !gold :** Altın efekti verir yazıya,
> **» !gold2 :** Başka bir altın efektli yazı,
> **» !green :** Yeşil yazı yazar,
> **» !kalp :** Kalpli yazı yazar,
> **» !mlogo :** M stilli yazı yazar,
> **» !müziklogo :** Yazıya kulaklık yazısı yazar,
> **» !skull :** Kuru kafalı yazı yazar,
> **» !yeşilışık :** Yeşil ışıklı yazı yazar,
> **» !yayvan :** Yayvan stilli yazı yazar,
> **» !yansımalı :** Yansımalı yazı yazar,
> **» !ejderha :** Ejderha temalı logo üretirsiniz.

**Nasıl Yapılır**

 :dizzy: ** ,<logoadı> <yazınız>**  **Bu şekilde logo oluşturabilirsiniz**
 :dizzy: **Türkçe karakterler sıkıntılı oyüzden cümlenizde kullanmayın**

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
    name: 'logoyap',
    description: 'The Help Command',
    usage: 'logoyap'
};