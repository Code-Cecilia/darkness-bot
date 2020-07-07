const { MessageEmbed } = require("discord.js");

let colors = [0x00ae86, 0x0099ff, 0xff5555]

module.exports = {
  DarkEmbed: () => {
    let rColor = colors[Math.floor(Math.random() * colors.length)]
    let embed = new MessageEmbed();
    embed.setColor(rColor);
    embed.setTimestamp();
    embed.setFooter(
      `darkness`,
      "https://cdn.discordapp.com/avatars/504405249419902977/ab8b4e639448f60afb9b59c24c3e2eab.png?size=256"
    );
    return embed;
  }
};

