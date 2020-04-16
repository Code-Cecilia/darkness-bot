const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const name = args[0]
    const color = args[1]
    if (!message.member.hasPermission("MANAGE_ROLES")) return await message.reply("You do not have permission to use this command");
    if (!name) return await message.reply('Specify a name!')
    if (!color && !Number(color)) return await message.reply(`Specify a color or use \`${client.config.PREFIX}createrole ${name} nocolor\``)
    if (color && Number(color) && color !== 'nocolor') {
        await message.guild.createRole({ name: name, color: color }).then(role => { console.log('Role created'); message.reply(`${role.name} was created`) }).catch(e => console.error(e))
    } else if (color && color === 'nocolor') {
        await message.guild.createRole({ name: name }).then(role => { console.log('Role created'); message.reply(`${role.name} was created`) }).catch(e => console.error(e))
    }
}

module.exports.help = {
    name: "createrole",
    aliases: ["cr"],
    disabled: false,
    ownerOnly: false,
    adminOnly: true,
    modOnly: false,
    category: "Mod Commands"
  };