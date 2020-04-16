module.exports.run = async (client, message, args) => {
    console.log(message.author.tag, 'used the command creeper')
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        embed.setTitle('STOP!')
        embed.setImage('https://cdn.discordapp.com/attachments/605383242576560138/611877494953607172/image0-19.png')
        embed.setTimestamp()
        embed.setFooter('darkness', client.user.displayAvatarURL)
        message.channel.send(embed)
    };

    module.exports.help = {
        name: "creeper",
        aliases: [],
        disabled: false,
        ownerOnly: false,
        adminOnly: false,
        modOnly: false,
        category: "Fun"
    }