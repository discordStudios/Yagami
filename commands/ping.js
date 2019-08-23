const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Pong!** - Ping: \`${Math.round(client.ping)}ms\``)
    .setColor('#A65EA5')
    return message.channel.send(embed);

}
