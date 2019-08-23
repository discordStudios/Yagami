const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle('__Invite Light Yagami__')
    .setDescription(`Here you go ^^: https://discordapp.com/api/oauth2/authorize?client_id=612680246289891330&permissions=0&scope=bot`)
    .setColor('#A65EA5')
    return message.channel.send(embed);

}
