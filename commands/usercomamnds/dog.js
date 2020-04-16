const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    console.log(message.author.tag, 'used the command dog')
    let reddit = [
        "dog"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'dog.png',
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: "dog",
    aliases: [],
    disabled: false,
    ownerOnly: false,
    adminOnly: false,
    modOnly: false,
    category: "Fun"
}