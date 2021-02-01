require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

let gifMap = new Map([
    ['.bleach' , 'https://media.giphy.com/media/StFlcHVnuz6Yy6mxcq/giphy.gif'],
    ['.tired', 'https://tenor.com/Ljkg.gif'],
    ['.please', 'https://tenor.com/uuGf.gif'],
    ['.wink', 'https://tenor.com/bcJmv.gif'],
    ['.wow', 'https://tenor.com/sIjo.gif'],
    ['.stare', 'https://tenor.com/0HEz.gif'],
    ['.confused', 'https://tenor.com/FGRO.gif'],
    ['.why1', 'https://tenor.com/bsSlt.gif'],
    ['.why2', 'https://tenor.com/X8bg.gif'],
    ['.hug', 'https://tenor.com/0BBv.gif'],
    ['.sorry', 'https://tenor.com/I6mX.gif'],
    ['.hi', 'https://tenor.com/6yi5.gif'],
    ['.angry', 'https://tenor.com/bb4qh.gif'],
    ['.yay', 'https://tenor.com/EAzz.gif'],
    ['.morning', 'https://tenor.com/bg2FA.gif'],
    ['.cry', 'https://tenor.com/9lby.gif'],
    ['.laugh', 'https://tenor.com/M31E.gif'],
    ['.cheer', 'https://tenor.com/Z5lt.gif'],
    ['.fine', 'https://tenor.com/4uiK.gif'],
]);

client.on("message", message => {
    if (gifMap.has(message.content)) {
        const attachment = new Discord.MessageAttachment(gifMap.get(message.content));
        return message.channel.send(attachment);
    }

    if (message.content === '.info') {
        return message.channel.send('List of GIFS', {
            embed: {
                color: '#ff7b00',
                fields: [
                    {
                        name: '.bleach',
                        value: gifMap.get('.bleach')
                    },
                    {
                        name: '.tired',
                        value: gifMap.get('.tired')
                    },
                    {
                        name: '.please',
                        value: gifMap.get('.please')
                    },
                    {
                        name: '.wink',
                        value: gifMap.get('.wink')
                    },
                    {
                        name: '.wow',
                        value: gifMap.get('.wow')
                    },
                    {
                        name: '.stare',
                        value: gifMap.get('.stare')
                    },
                    {
                        name: '.confused',
                        value: gifMap.get('.confused')
                    },
                    {
                        name: '.why1',
                        value: gifMap.get('.why1')
                    },
                    {
                        name: '.why2',
                        value: gifMap.get('.why2')
                    },
                    {
                        name: '.hug',
                        value: gifMap.get('.hug')
                    },
                    {
                        name: '.sorry',
                        value: gifMap.get('.sorry')
                    },
                    {
                        name: '.hi',
                        value: gifMap.get('.hi')
                    },
                    {
                        name: '.angry',
                        value: gifMap.get('.angry')
                    },
                    {
                        name: '.yay',
                        value: gifMap.get('.yay')
                    },
                    {
                        name: '.morning',
                        value: gifMap.get('.morning')
                    },
                    {
                        name: '.cry',
                        value: gifMap.get('.cry')
                    },
                    {
                        name: '.laugh',
                        value: gifMap.get('.laugh')
                    },
                    {
                        name: '.cheer',
                        value: gifMap.get('.cheer')
                    },
                    {
                        name: '.fine',
                        value: gifMap.get('.fine')
                    }
                ]
            }
        })
    }
})
