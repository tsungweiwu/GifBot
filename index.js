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
    ['.tired', 'https://tenor.com/view/tired-gif-8853358'],
    ['.please', 'https://tenor.com/view/puss-in-boots-cat-cute-gif-4845429'],
    ['.wink', 'https://tenor.com/view/mr-bean-wink-wink-winking-rowan-atkinson-gif-15388297'],
    ['.wow', 'https://tenor.com/view/parks-and-rec-andy-dwyer-chris-pratt-jaw-drop-shocked-gif-4421172'],
    ['.stare', 'https://tenor.com/view/awkward-stare-dog-stare-dog-brows-funny-gif-12521793'],
    ['.confused', 'https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882'],
    ['.why1', 'https://tenor.com/view/whyyyy-why-gif-19236077'],
    ['.why2', 'https://tenor.com/view/confused-white-persian-guardian-why-gif-11908780'],
    ['.hug', 'https://tenor.com/view/milk-and-mocha-hugs-bear-couple-love-cute-gif-12498539'],
    ['.sorry', 'https://tenor.com/view/im-sorry-bow-puppy-eyes-apologize-gif-8326897'],
    ['.hi', 'https://tenor.com/view/puppy-dog-wave-hello-hi-gif-13915833'],
    ['.angry', 'https://tenor.com/view/peach-cat-angry-hmpf-gif-15230927'],
    ['.yay', 'https://tenor.com/view/yay-minions-happiness-happy-excited-gif-7251359'],
    ['.morning', 'https://tenor.com/view/cat-peek-aboo-kitty-white-cat-cute-cat-gif-16415828'],
    ['.cry', 'https://tenor.com/view/crying-cry-rabbit-cute-adorable-gif-14580378'],
    ['.laugh', 'https://tenor.com/view/spit-take-laugh-lmao-gif-9271200'],
    ['.cheer', 'https://tenor.com/view/friends-chandler-joey-good-job-great-job-gif-12374537'],
    ['.fine', 'https://tenor.com/view/blue-cry-sad-bad-day-gif-13423780'],
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
