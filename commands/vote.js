const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const weeb = [
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)",
      "Vote for me (https://discordbots.org/bot/559421257443966986/vote)"
    ];
    let member = message.mentions.members.first();
    var randomweeb = weeb[Math.floor(Math.random()*weeb.length)];
    if(!member) {
    return message.reply(`${randomweeb}`);
    } else {
      return message.channel.send(`${member}, ${randomweeb}`)
    }
}
