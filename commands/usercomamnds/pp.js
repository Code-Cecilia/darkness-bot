/**
 * 1 - Rodolfo
 * 2 - Yuichiro
 * 3 - Frey
 */
const owners = [
  "286484126175985664",
  "219410026631135232",
  "460101157881118723"
];

exports.run = (client, message, args, DarkEmbed) => {
  let member = message.mentions.users.first() || message.author;

  let idLastDigits = member.id.toString().slice(-2)
  let size;

  if (idLastDigits > 30 && !owners.includes(member.id)) {
    size = Number(idLastDigits) / 2
    if (size > 30) {
      size = Number(size) / 2
      PPEmbed(member, size, message, DarkEmbed)
    } else {
      PPEmbed(member, size, message, DarkEmbed)
    }
  } else if (owners.includes(message.author.id)) {
    size = 69
    PPEmbed(member, size, message, DarkEmbed)
  }
};

module.exports.help = {
  name: "penis",
  aliases: ["pp", "peepee"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Fun"
};

function PPEmbed (member, size, message, DarkEmbed) {
  let embed = DarkEmbed()

  embed.setTitle("**The __100% legit__ peepee size machine**.")
  embed.setThumbnail("https://www.dictionary.com/e/wp-content/uploads/2018/02/Eggplant_Emoji_grande-300x300.png")
  embed.addField("*Wait why do you want to know it...? Okay, there.*", `●  *${member.username} has a pp with a size of **${size}cm***`)

  message.channel.send(embed)
}
