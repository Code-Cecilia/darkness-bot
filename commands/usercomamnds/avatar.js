exports.run = (client, message, args) => {
    console.log(message.author.tag, "used the avatar command");
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        let member = message.mentions.users.first() || message.author;
        embed.setColor(0x333333);
        embed.setTitle(member.username + ' avatar');
        embed.setImage(member.avatarURL);
        embed.setTimestamp();
        embed.setFooter('You look nice', client.user.displayAvatarURL);
        message.channel.send(embed);
    };

    module.exports.help = {
        name: "avatar",
        aliases: ["h"],
        disabled: false,
        ownerOnly: false,
        adminOnly: false,
        modOnly: false,
        category: "Discord"
      };    