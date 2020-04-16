exports.run = (message, client) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    const promises = [
        shard.manager.fetchClientValues('guilds.size'),
        shard.manager.broadcastEval('this.guilds.reduce((prev, guild) => prev + guild.memberCount, 0)'),
    ];
    
    Promise.all(promises)
        .then(results => {
            const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
            const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
            return message.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
        })
        .catch(console.error);
                embed.setTitle('Stats about the about.'),
                embed.setColor(0x00AE86),
                embed.addField("Server count", client.guilds.size),
                embed.addField("Member count:", client.guilds.memberCount);
         message.channel.send(embed);
    };