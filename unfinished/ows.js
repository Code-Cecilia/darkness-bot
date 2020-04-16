const randomPuppy = require('random-puppy');

// deprecated
module.exports.run = async (bot, message, args) => {

    let reddit = [
        "anime",
        "aonoexorcist",
        "shinoa",
        "yuichirohyakuya",
        "mikaelahyakuya",
        "rinokumura",
        "mephistophines"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'ows.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};