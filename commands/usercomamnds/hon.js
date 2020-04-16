module.exports.run = async (client, message, args) => {
    console.log(message.author.tag, 'used the command hon')
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        embed.setColor(3447003)
        embed.setTitle('HonHonHon, la baguette! ( ͡° ͜ʖ ͡°)')
        embed.setImage('https://cdn.discordapp.com/attachments/556116494417920002/612042004821442562/baguette.png')
        embed.setTimestamp()
        embed.setFooter('darkness', client.user.displayAvatarURL);
        message.channel.send(embed)    
  };

  module.exports.help = {
    name: "hon",
    aliases: [],
    disabled: false,
    ownerOnly: false,
    adminOnly: false,
    modOnly: false,
    category: "Fun"
}