const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}'s Help Menu`, client.user.displayAvatarURL)
    .setColor('#A65EA5')
    .setDescription([`
    All commands uses \`${config.prefix}\` as prefix.
    `])
    .addField('__Commands__', `**${config.prefix}help**\n**${config.prefix}info**\n**${config.prefix}ping**\n**${config.prefix}invite**\n**${config.prefix}support**\n―――――\n**${config.prefix}kpop**\n**${config.prefix}jpop**\n**${config.prefix}gif**\n**${config.prefix}leave**\n**${config.prefix}join**\n**${config.prefix}volume**\n―――――\n**${config.prefix}moe**\n**${config.prefix}meme**\n**${config.prefix}calc**`, true)
    .addField('__Commands__',`**${config.prefix}warn**\n**${config.prefix}bug**\n**${config.prefix}uptime**\n**${config.prefix}user**`, true)
    return message.channel.send(embed);
    };
