const Discord = require("discord.js");

module.exports.run = async (bot, message, client, args, guild) => {
  console.log(message.author.tag, "used the serverinfo command.");
  let sEmbed = new Discord.MessageEmbed()
    .setColor(0x00ff18)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setAuthor(
      `${message.guild.name} Info`,
      message.guild.iconURL({ dynamic: true })
    )
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${"<@" + message.guild.ownerID + ">"}`, true)
    .addField("**Server Region:**", `${message.guild.region}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.cache.size}`, true)
    .addField("**Large Guild?**", `${message.guild.large}`, true)
    .addField(
      "**Verification level**:",
      `${message.guild.verificationLevel}`,
      true
    )
    .addField("**Guild created at:**", `${message.guild.createdAt}`)
    .setTimestamp()
    .setFooter(`darkness`, bot.user.displayAvatarURL());
  message.channel.send({ embed: sEmbed }).catch(console.error);
};

module.exports.help = {
  name: "serverinfo",
  aliases: ["si"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Discord"
};