require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

let gifMap = new Map([['bleach' , 'https://media.giphy.com/media/StFlcHVnuz6Yy6mxcq/giphy.gif']]);

client.on("message", message => {
    if (gifMap.has(message.content)) {
        const attachment = new Discord.MessageAttachment(gifMap.get(message.content));
        return message.channel.send(attachment);
    }
})
