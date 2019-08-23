const config = require('../config.json');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    randomPuppy('animemes')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setImage(url)
        .setColor('#A65EA5')
     return message.channel.send({ embed });
})
}
