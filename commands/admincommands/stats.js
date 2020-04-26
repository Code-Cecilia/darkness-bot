const Discord = require("discord.js");

exports.run = (client, message, args) => {
  console.log(message.author.tag, "used the command stats");
  const embed = new Discord.MessageEmbed();
  embed.setThumbnail(
    "https://cdn.discordapp.com/avatars/504405249419902977/ab8b4e639448f60afb9b59c24c3e2eab.png?size=256"
  );
  embed.setTitle("**__Stats about the bot.__**");
  embed.setColor(0x00ae86);
  embed.addField("Server count", client.guilds.cache.size);
  embed.addField("Member count:", client.users.cache.size);
  embed.setTimestamp();
  embed.setFooter(
    `darkness`,
    "https://cdn.discordapp.com/avatars/504405249419902977/ab8b4e639448f60afb9b59c24c3e2eab.png?size=256"
  );
  message.channel.send(embed);
};

module.exports.help = {
  name: "stats",
  aliases: [],
  disabled: false,
  ownerOnly: false,
  adminOnly: true,
  modOnly: false,
  category: "Admin Commands"
};
