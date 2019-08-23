exports.run = (client, message, args) => {
    if (!args[0]) return;
    if (args[0] === "bug")
    if (reason.length < 0) return message.reply('You must supply a bug and what command.');
  if (message.mentions.users.size < 1) return message.reply('You must mention the bot and the bug.').catch(console.error);
    let reason = args.slice(1).join(' ');
    message.reply("Thanks for submitting a bug!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.get('612691625625387054').send(`${content}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>'
};
