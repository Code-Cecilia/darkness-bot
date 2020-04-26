const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => {
  console.log(message.author.tag, "used the stats command");
  const duration = moment
    .duration(client.uptime)
    .format(" D [days], H [hrs], m [mins], s [secs]");
  message.channel.send(
    `= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${duration}
• Discord.js :: v${version}
• Node       :: ${process.version}`,
    { code: "asciidoc" }
  );
};

module.exports.help = {
  name: "hostinfo",
  aliases: ["hi"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Information"
};