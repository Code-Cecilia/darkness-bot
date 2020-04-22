exports.run = (client, message, args) => {
    console.log(message.author.tag, "used the reload command");
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(`I cannot perform that action.`);
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`Sorry, this command is restricted to staff!`);
    if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
    const commandName = args[0];
    if(!client.commands.has(commandName)) {
      return message.reply("That command does not exist");
    }
    delete require.cache[require.resolve(`${commandName}.js`, { paths: ['./commands/admincommands', './commands/usercomamnds'] })];
    client.commands.delete(commandName);
    const props = {
      admin: require(admincommands),
      user: require(usercomamnds)
    };
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