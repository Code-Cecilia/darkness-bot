const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    console.log(message.author.tag, 'used the command yeet')
    if(message.author.id != "219410026631135232") return message.channel.send("You're the bot the owner!")

    try {
        await message.channel.send("Roses are red, violets are blue, my process is dead im such a disaster :(")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}

module.exports.help = {
    name: "yeet",
    aliases: [],
    disabled: false,
    ownerOnly: false,
    adminOnly: true,
    modOnly: false,
    category: "Admin Commands"
  };