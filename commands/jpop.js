const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Discord.RichEmbed()
            .setDescription('**Connected!** Playing JPOP.')
            .setColor('#A65EA5')
            connection.playArbitraryInput(`https://listen.moe/opus`);
            message.channel.send(embed);
          })
          .catch(console.log);
      } else {
        message.reply('You are not in a voice channel!');
      }
    };
  
