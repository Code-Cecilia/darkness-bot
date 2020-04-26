const owners = ['286484126175985664', '219410026631135232', '457744412877783041']

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.PREFIX) !== 0) return;
    const args = message.content.slice(client.config.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
    const cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

    if (!cmd) return;

    if (cmd && !owners.includes(message.author.id) && cmd.help.disabled)
      return message.channel.send(
        "**Only my owner can use it!\nReason:** `Disabled command.`"
      );
    if (cmd && !owners.includes(message.author.id) && cmd.help.ownerOnly)
      return message.channel.send(
        "**Only my owner can use it!\nReason:** `Owner Only command.`"
      );
    if (
      !message.member.hasPermission("BAN_MEMBERS") &&
      cmd &&
      cmd.help.adminOnly
    )
      return message.channel.send(
        "**Only Administrators can use it!\nReason:** `Administrator Only command. (BAN_MEMBERS permission required)`"
      );
    cmd.run(client, message, args);
  };