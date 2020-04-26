const Discord = require("discord.js");

module.exports.run = async (bot, message, client, args) => {
  console.log(message.author.tag, "used the userinfo command.");
  let uEmbed = new Discord.MessageEmbed();
  let member = message.mentions.users.first() || message.author;
  const memberD = message.guild.member(
    message.mentions.users.first() || message.author
  );
  uEmbed.setColor(0x00ff18);
  uEmbed.setThumbnail(member.avatarURL({ dynamic: true }));
  uEmbed.setAuthor(`${member.username}`, member.avatarURL({ dynamic: true }));
  uEmbed.addField("**Username:**", `${member.username}`, true);
  uEmbed.addField("**Discriminator:**", `${member.discriminator}`, true);
  uEmbed.addField("**ID:**", `${member.id}`);
  uEmbed.addField("**Status:**", `${member.presence.status}`, true);
  uEmbed.addField("**Bot?**", `${member.bot}`, true);
  uEmbed.addField("**Joined Guild at:**", `${memberD.joinedAt}`);
  uEmbed.addField("**Registered At:**", `${member.createdAt}`);
  uEmbed.setTimestamp();
  uEmbed.setFooter(`darkness`, bot.user.displayAvatarURL());

  message.channel.send({ embed: uEmbed });
};

module.exports.help = {
  name: "userinfo",
  aliases: ["ui"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Discord"
};
