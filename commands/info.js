const config = require('../config.json');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    const moment = require('moment');
    require('moment-duration-format');
    const embed = new RichEmbed()
    .setTitle('__Light Yagami \'s Info__')
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`Hiya, i'm Light Yagami your personal anime stream radio ^^`)
    .addField('__Guilds__', client.guilds.size, true)
    .addField('__Users__', client.users.size, true)
    .addField('__Emojis__', client.emojis.size, true)
    .addField('__Channels__', client.channels.size, true)
    .addField('__Uptime__', moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .addField('__Memory Usage__', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
    .addField('__Prefix__', `\`${config.prefix}\``, true)
    .setFooter('Light Yagami| By: Accuser#6777')
    .setColor('#A65EA5')
    return message.channel.send(embed);

}