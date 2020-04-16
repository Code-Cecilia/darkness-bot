const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    console.log(message.author.tag, 'used the say command.')
    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

}

module.exports.help = {
    name: "say",
    aliases: [],
    disabled: false,
    ownerOnly: false,
    adminOnly: false,
    modOnly: false,
    category: "Fun"
}