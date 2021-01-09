const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

message.channel.send(`Ping Hesaplanıyor`).then(msg=>{
    const fc = new Discord.MessageEmbed()
        .setTitle('')
        .setDescription(`**Status** \n** Ping ${Math.floor(msg.createdTimestamp ** - message.createdTimestamp)}ms \n **Type** ${Math.round(client.ws.ping)}ms** \n**${client.guilds.cache.size}** Server**${client.users.cache.size}** Users! `)
        .setFooter(`${message.author.tag} reciever`,  message.author.avatarURL)
        .setThumbnail(message.author.avatarURL())
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
	name: 'ping',
	description: '',
	usage: ''
}