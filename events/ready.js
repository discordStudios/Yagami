const config = require('../config.json');

exports.run = (client) => {
    console.log(`[uwu Radio] uwu is ready in ${client.guilds.size} server(s).`);
    console.log(`[uwu Radio] Playing with ${client.users.size} users.`);
    console.log(`[uwu Radio] uwu Invite: :)`);
    client.user.setActivity(`in ${client.guilds.size} guilds | ly!help`, {
      type: "STREAMING",
      url: "https://twitch.com/ninja"
    });
  }
