const Discord = require('discord.js');
const rdb = require('quick.db');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {

 
if(!["789194952017707016"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`Bu komutu kullanabilmek için ayarlanan kayıt yetkisine sahip olmalısınız!`).then(x => x.delete({timeout: 500000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('<a:hydratac:789369824249643009> **Bir üye etiketlemelisin.** <a:hydratac:789369824249643009>').then(x => x.delete({timeout: 500000}));
  member.roles.add(ayarlar.ekip)
  member.roles.add(ayarlar.ekip)
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`<a:hydratac:789369824249643009> **${member} kişisine <@&${ayarlar.ekip}> rolünü verdim** <a:hydratac:789369824249643009>`)
  .setTimestamp()
message.channel.send(embed).then(x => x.delete({timeout: 500000}));
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['144'],
  permLevel: 0
}
exports.help = {
  name: '144',
  description: "Belirtilen üyeye 144 rolü verir",
  usage: '144 @kişi'
}