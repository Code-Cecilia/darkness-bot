exports.run = (client, message, args) => {
  console.log(message.author.tag, "used the avatar command");
  const Discord = require("discord.js");
  const embed = new Discord.MessageEmbed();
  let member = message.mentions.users.first() || message.author;
  embed.setColor(3447003);
  embed.setTitle(member.username + " avatar");
  embed.setImage(member.avatarURL({ dynamic: true, size: 1024 }));
  embed.setTimestamp();
  embed.setFooter("You look nice", client.user.displayAvatarURL());
  message.channel.send(embed);
};

module.exports.help = {
  name: "avatar",
  aliases: ["a"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Discord"
};
