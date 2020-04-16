const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    console.log(message.author.tag, 'used the serverinfo command.')
    let sEmbed = new Discord.RichEmbed()
    .setColor()
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setTimestamp()
    .setFooter(`darkness`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}

module.exports.help = {
    name: "serverinfo",
    aliases: ["si"],
    disabled: false,
    ownerOnly: false,
    adminOnly: false,
    modOnly: false,
    category: "Discord"
  };