exports.run = (client, message, [mention, ...reason]) => {
  console.log(message.author.tag, "used the ping command");
  const Discord = require("discord.js");
  const embed = new Discord.MessageEmbed();
  embed.setTitle("**Bot Latency**");
  embed.setColor(0xff5555);
  embed.setThumbnail(client.user.avatarURL());
  embed.addField("Websocket Latency", `${client.ws.ping}ms`);
  embed.addField("Discord API Latency", "soon");
  embed.setTimestamp();
  embed.setFooter(`darkness`, client.user.avatarURL());
  message.channel.send(embed);
};

module.exports.help = {
  name: "ping",
  aliases: [],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Information"
};
