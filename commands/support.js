const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle('__Light Yagami\'s Support__')
    .setDescription(`None exist, OWO`)
    .setColor('#A65EA5')
    return message.channel.send(embed);

}
