
const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        let embed = new Discord.RichEmbed()
        .setDescription('Joined Voice Channel.')
        .setColor('#A65EA5')
      message.channel.send(embed);
    };
  }