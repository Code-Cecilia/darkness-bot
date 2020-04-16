exports.run = (client, message, args) => {
    console.log(message.author.tag, "used the reload command");
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(`I cannot perform that action.`);
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`Sorry, this command is restricted to staff!`);
    if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./admincommands/${commandName}.js` && `./usercomamnds/${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./admincommands/${commandName}.js` && `./usercomamnds/${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
  };

  module.exports.help = {
    name: "reload",
    aliases: [],
    disabled: true,
    ownerOnly: true,
    adminOnly: false,
    modOnly: false,
    category: "Owner-only Commands"
  };