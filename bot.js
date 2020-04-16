const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const {Client, RichEmbed, Collection} = require('discord.js');
const client = new Client();
const fs = require("fs");
const Enmap = require("enmap");
const config = require('./config.json');
const moment = require('moment');
const RegExp = require("regexp")

client.config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Collection();
client.aliases = new Collection();

client.settings = new Enmap({name: "settings"});

const categories = ["usercomamnds", "admincommands"];

categories.forEach(category => {
  for (category of categories) {
    const categoriesFiles = fs.readdirSync(`./commands/${category}/`);
    for (const file of categoriesFiles) {
      const props = require(`./commands/${category}/${file}`);
      client.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    }
  }
});

const init = async () => {

const evtFiles = await readdir("./events/");
client.logger.log(`Loading a total of ${evtFiles.length} events.`);
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  client.logger.log(`Loading Event: ${eventName}`);
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
});
};


client.on('message', message => {
  if (message.content.startsWith(config.PREFIX + 'invite')) {
    message.channel.send('Invite me using this link: https://discordapp.com/oauth2/authorize?client_id=504405249419902977&scope=bot&permissions=8')
    }
  });


client.on('message', message => {
  if (message.author.id == client.user.id) return;
  if (message.mentions.users.first() 
  && message.mentions.users.first().id == client.user.id) {
    message.reply(`Hello! My prefix is \`${config.PREFIX}\`, type \`${config.PREFIX}help\` to see a list of commands.`);
    }
  });

 client.login(process.env.TOKEN);   