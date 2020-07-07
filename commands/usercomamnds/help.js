const Discord = require("discord.js");

const owners = [
  "286484126175985664",
  "219410026631135232",
  "457744412877783041",
  "460101157881118723"
];

exports.run = (client, message, args) => helpEmbed(client, message);

function helpEmbed(client, message) {
  const embed = new Discord.MessageEmbed();
  const vCommands = owners.includes(message.author.id)
    ? client.commands.filter(c => !c.help.disabled + c.help.disabled)
    : client.commands.filter(c => !c.help.disabled);
  const categories = vCommands
    .map(c => c.help.category)
    .filter((v, i, a) => a.indexOf(v) === i);

  categories.forEach(category => {
    const commands = vCommands
      .filter(c => c.help.category === category)
      .map(c => `\`${c.help.name}\``)
      .join("**, **");

    embed.setThumbnail(
      "https://cdn.discordapp.com/avatars/504405249419902977/ab8b4e639448f60afb9b59c24c3e2eab.png?size=256"
    );
    embed.setAuthor("darkness");
    embed.setColor(0x00ae86);
    embed.setTimestamp();
    embed.setFooter("darkness");
    embed.addField(
      category
        .replace("Fun", "😂 **Fun** 😂")
        .replace("Owner-only Commands", "❌ **Owner-only** ❌")
        .replace("Mod Commands", "🛠 **Moderation** 🛠")
        .replace("Information", "💁 **Information** 💁")
        .replace("Discord", "☑️ **Discord** ☑️")
        .replace("Admin Commands", "🛠 **Administration** 🛠"),
      commands,
      false
    );
  });
  message.channel.send(embed);
}

module.exports.help = {
  name: "help",
  aliases: ["h"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Information"
};
