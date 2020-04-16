const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

exports.run = (client, message, args) => helpEmbed(client, message)

function helpEmbed(client, message) {
  const vCommands = client.commands.filter(c => !c.help.disabled);

  const categories = vCommands
    .map(c => c.help.category)
    .filter((v, i, a) => a.indexOf(v) === i);

  categories.forEach(category => {
    const commands = vCommands
      .filter(c => c.help.category === category)
      .map(c => `\`${c.help.name}\``)
      .join("**, **");

    embed.setThumbnail("https://cdn.discordapp.com/avatars/504405249419902977/ab8b4e639448f60afb9b59c24c3e2eab.png?size=256")
    embed.setAuthor("darkness")
    embed.setColor(0x00AE86)
    embed.setTimestamp()
    embed.setFooter("darkness")
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