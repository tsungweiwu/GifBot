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
    ['.tired', 'https://media1.tenor.com/images/364bed85abc6a6b0c6fee19ee769e4f2/tenor.gif'],
    ['.please', 'https://media1.tenor.com/images/21c091602153cac1fc58d54373169863/tenor.gif'],
    ['.wink', 'https://media1.tenor.com/images/de8665e1951d674380eb9f88152a9f27/tenor.gif'],
    ['.wow', 'https://media1.tenor.com/images/3d124f67efd8e08b6fd3f0e748255a95/tenor.gif'],
    ['.stare', 'https://media1.tenor.com/images/6ecc1a2747f44af476f7d101a7ea71f7/tenor.gif'],
    ['.confused', 'https://media1.tenor.com/images/46d73c3cc50fa32e0e1d8c2a38007477/tenor.gif'],
    ['.why1', 'https://media1.tenor.com/images/4a68f772736adb98d49a0e63d48b9f27/tenor.gif'],
    ['.why2', 'https://media1.tenor.com/images/9fdf6ac1652c92984383ca5d6f392c9b/tenor.gif'],
    ['.hug', 'https://media1.tenor.com/images/3264bcc47ee47ebbdd441f9f1d203542/tenor.gif'],
    ['.sorry', 'https://media1.tenor.com/images/173a12d6975d4fac4f79702157086485/tenor.gif'],
    ['.hi', 'https://media1.tenor.com/images/4835031d3191d4fe5ffad06def5e284d/tenor.gif'],
    ['.angry', 'https://media1.tenor.com/images/0927367451ca401cbfeba87d654aecbf/tenor.gif'],
    ['.yay', 'https://media1.tenor.com/images/5e659326c2027e01b2c56a8c6d7908e7/tenor.gif'],
    ['.morning', 'https://media1.tenor.com/images/edaf739b81d33a554d6466303c1ef861/tenor.gif'],
    ['.cry', 'https://media1.tenor.com/images/a846f5900be6196031711066e832ea11/tenor.gif'],
    ['.laugh', 'https://media1.tenor.com/images/348caef7f383e12d740d7777726e54a3/tenor.gif'],
    ['.cheer', 'https://media1.tenor.com/images/b94c3db38d669a1c08982ce8f5dfa531/tenor.gif'],
    ['.fine', 'https://media1.tenor.com/images/0aa08aebc1df20acc900d1751b722f30/tenor.gif'],
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
