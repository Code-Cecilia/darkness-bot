exports.run = async (client, message, args) => {
    console.log(message.author.tag, 'used the command eval')
    if (message.author.id !== '219410026631135232') return;
    try {
        const code = args.join(" ");
        let evaled = eval(code);
        if (evaled instanceof Promise) evaled = await evaled
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {
            code: "xl"
        }).catch(console.error);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};

const clean = text => {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

module.exports.help = {
    name: "eval",
    aliases: ["evaluate"],
    disabled: true,
    ownerOnly: true,
    adminOnly: false,
    modOnly: false,
    category: "Owner-only Commands"
  };