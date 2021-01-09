const discord = require('discord.js');
const moment = require('moment');
const db = require('db');
const fs = require('fs');
const http = require('http');
const express = require('express');
const ayarlar = require('./ayarlar.json');
const app = express();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("apikey");
const { apikey } = require('./ayarlar.json');


var PREFIX = ayarlar.prefix;
var sahip = ayarlar.sahip;
var util = require('util');
  console.log("Kelmange Kako Kako")


//Değişen Oynuyor Baş
const Discord = require('discord.js')
const client = new Discord.Client();
client.on("ready", () => {
  let liste =["!help for see all the commands, saptify.glitch.com '!site'",]
   let listeler = liste[Math.floor(Math.random() * liste.length)]

  setInterval(() => {
  client.user.setActivity(listeler)
  console.log("Oynuyor ayarlandı")
}, 10000)
})

const log = message => {
};
require('./util/eventLoader.js')(client);
//Değişen Oynuyor Son

client.on("ready", () => {
  console.log("Şuan bomba gibiyim tutmayın küçük eniştenizi")
  console.log(`Botun hizmet verdiği sunucu sayısı: ${client.guilds.cache.size}`)
  console.log(`Botun hizmet verdiği kullanıcı sayısı: ${client.users.cache.size}`)
})




//Komut Algılayıcı Baş

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props)
        });
    });

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

//Komut Algılayıcı Son

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};
client.login(process.env.TOKEN)


//Bota Atılan Dmler Baş
client.on("message", msg => {
var dm = client.channels.cache.get("745999875023568916")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});
//Bota Atılan Dmler Son

//Bot Müzik Altyapısı Baş

require("dotenv").config();//Loading .env

const { Collection, Client } = require("discord.js");


client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}



require("dotenv").config();//Loading .env
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}

