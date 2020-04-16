const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    console.log(message.author.tag, 'used the userinfo command.')
    let uEmbed = new Discord.RichEmbed()
    let member = message.mentions.users.first() || message.author;
    uEmbed.setColor()
    uEmbed.setTitle("User Info")
    uEmbed.setThumbnail(member.displayAvatarURL)
    uEmbed.setAuthor(`${member.username} Info`, member.displayAvatarURL)
    uEmbed.addField("**Username:**", `${member.username}`, true)
    uEmbed.addField("**Discriminator:**", `${member.discriminator}`, true)
    uEmbed.addField("**ID:**", `${member.id}`, true)
    uEmbed.addField("**Status:**", `${member.presence.status}`, true)
    uEmbed.addField("**Created At:**", `${member.createdAt}`, true)
    uEmbed.setTimestamp()
    uEmbed.setFooter(`darkness`, bot.user.displayAvatarURL);

    message.channel.send({embed: uEmbed});
}

module.exports.help = {
    name: "userinfo",
    aliases: ["ui"],
    disabled: false,
    ownerOnly: false,
    adminOnly: false,
    modOnly: false,
    category: "Discord"
  };