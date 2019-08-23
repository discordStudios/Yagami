const { RichEmbed } = require("discord.js");
const { get } = require("axios");

exports.run = async (client, message, args) => {
const data = await get('https://qtradio.moe/stats', { 'User-Agent': `moe/latest/bot` }); //Partially ported from qtradio site/desktop app
let data = body.data.icestats.source[0];
if (data === undefined) data = body.data.icestats.source;
const nowPlaying = { artist: data.artist, title: data.title };

if (message.member.voiceChannel) {
    let embed = new RichEmbed()
        .setDescription(`**Now Playing**: ${nowPlaying}`)
        .setColor('#A65EA5')
    message.channel.send(embed);
} else {
    message.reply('You are not in a voice channel!');
 }
};
  