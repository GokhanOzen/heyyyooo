const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`<a:hogel:738683113051389992> Moderasyon Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('Beter Moderasyon Menüsü')
  .setDescription('**!destek** (Destek komutlarını gösterir) **!kullanıcı** (Hakkında bilgi verir)\n\n **!sil** (Belirtilen sayıda mesaj siler)\n\n **!kural** (Sunucunuz için kurallar paylaşır)\n\n')
  .setColor('RANDOM')
	msg.edit(fc);
	msg.edit("\u200B")
	
})
                }

exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'moderation',
	description: '',
	usage: ''
}