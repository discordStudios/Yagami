const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {

    var lightningGifs = ["https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif",
    "https://media.giphy.com/media/zLv11caHfljCo/giphy.gif",
    "https://giffiles.alphacoders.com/398/3987.gif",]
    var temp = lightningGifs[Math.floor(Math.random() * 3)]

    var embed = new Discord.RichEmbed()
    .setColor("#f15606")
    .setAuthor("Anime", client.user.avatarURL)
    .setImage(temp)
    message.channel.send(embed);
};


exports.conf = {
    enabled: true,
    aliases: ["gifs"],
    guildOnly: false,
    permLevel: 'User'
  };
  
  exports.help = {
    name: 'lightninggif',
    category: 'Fun',
    description: 'Random Lightning gif',
    usage: 'lightning gif'
  };