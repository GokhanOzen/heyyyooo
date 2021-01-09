const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`Beter Premium Menüsü`).then(msg=>{
	const fc = new Discord.MessageEmbed()
  .setTitle('Beter Premium Menüsü')
  .setDescription('**Eklenecek** Eklenecek')
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
	name: 'premium',
	description: '',
	usage: ''
}