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
    ['.umm', 'https://media1.tenor.com/images/46d73c3cc50fa32e0e1d8c2a38007477/tenor.gif'],
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
    ['.wtf', 'https://media1.tenor.com/images/f19e98e6c506dbb2ca5cbb0a45afb2e0/tenor.gif'],
    ['.bye', 'https://media1.tenor.com/images/5fdae67034e3b441d6cfe627f982702a/tenor.gif'],
    ['.lol', 'https://media.discordapp.net/attachments/710728878464958514/806262378881875968/lmao.gif'],
    ['.noob', 'https://media1.tenor.com/images/367942835f27cc7549d47939905b8d7f/tenor.gif'],
    ['.eat', 'https://media1.tenor.com/images/023fedab4097b47363e653160993e892/tenor.gif'],
    ['.sigh', 'https://media1.tenor.com/images/2f3faee59a3ce7c5825b32e1d35eac0a/tenor.gif'],
    ['.shock', 'https://media1.tenor.com/images/2da0e351c8bd2269ce91e1e081a539d0/tenor.gif'],
    ['.prob', 'https://media1.tenor.com/images/89f98868dbe7517ddfa0c0b58bb99b55/tenor.gif'],
    ['.wowcat', 'https://media1.tenor.com/images/efed65e64ae92033afe38847a89e8d13/tenor.gif'],
    ['.look', 'https://media1.tenor.com/images/bea184000835639c3e5eacb4591fb369/tenor.gif'],
    ['.go', 'https://media1.tenor.com/images/11e0c7c6af4488e5f070ad8da65bd6fe/tenor.gif'],
    ['.smh', 'https://media1.tenor.com/images/f9cda68d7efac6653953ac8d7468e251/tenor.gif'],
    ['.panic', 'https://media1.tenor.com/images/991c7e987a994acfa837aa913e18c14a/tenor.gif'],
    ['.darn', 'https://media1.tenor.com/images/a18944287abb101203e4bb362672c2b2/tenor.gif'],
    ['.plan', 'https://media1.tenor.com/images/bca5ea7298b3db7b160fa432c484de72/tenor.gif'],
    ['.dishes', 'https://media1.tenor.com/images/32a48bd55d3ed776b07d855199e34309/tenor.gif'],
    ['.pat', 'https://media1.tenor.com/images/8c1a53522a74129607b870910ac288f9/tenor.gif'],
    ['.ty', 'https://media1.tenor.com/images/1114067881329bb4218880eeb7ec34fd/tenor.gif'],
    ['.ty2', 'https://media.giphy.com/media/4BylJD2QxStzO/giphy.gif'],
    ['.yw', 'https://media.giphy.com/media/XaA0fpudSHPf4MPlEK/giphy.gif'],
    ['.sus', 'https://media1.tenor.com/images/28f49f4fcfbe4631ec685cccb88d3a99/tenor.gif'],
    ['.among', 'https://media1.tenor.com/images/b4082c28645cbb89464df3fdb042c03c/tenor.gif'],
    ['.idk', 'https://media1.tenor.com/images/ce441e4f0e6f115e9eb1b321955c1b80/tenor.gif'],
    ['.ouch', 'https://media1.tenor.com/images/24b2abb0843d3287844ebd5f6b4dc371/tenor.gif'],
    ['.eww', 'https://media1.tenor.com/images/136e3fcc088691d0947268428d2c531a/tenor.gif'],
    ['.stress', 'https://media1.tenor.com/images/b50a1f6bd1ca2b29a222b2469504b426/tenor.gif'],
    ['.hi5', 'https://media1.tenor.com/images/7ffa3616a1884115584f4abd31d01255/tenor.gif'],
    ['.clap', 'https://media1.tenor.com/images/8c8f18bec7ba6a1b7ddc2ef76664e9ae/tenor.gif'],
    ['.aww', 'https://media1.tenor.com/images/bf35b472c70f4e79ec841d501bdb9cd0/tenor.gif'],
    ['.oops', 'https://media1.tenor.com/images/8474b0f567704b752354d6e5a589784b/tenor.gif']

]);

client.on("message", message => {
    if (gifMap.has(message.content)) {
        let attachment = new Discord.MessageAttachment(gifMap.get(message.content));
        try {
            return message.channel.send(attachment);
        } catch (err) {
            console.error(err);
        }
    }

    if (message.content === '.info') {
        try {
            return message.channel.send('List of GIFS', {
                embed: {
                    color: '#ff7b00',
                    description: '.bleach\n.tired\n.please\n.wink\n.wow\n.stare\n' +
                        '.umm\n.why1\n.why2\n.hug\n.sorry\n.hi\n.angry\n.yay\n' +
                        '.morning\n.cry\n.laugh\n.cheer\n.fine\n.wtf\n.bye\n.lol\n' +
                        '.noob\n.eat\n.sigh\n.shock\n.prob\n.wowcat\n.look\n.go\n' +
                        '.smh\n.panic\n.darn\n.plan\n.dishes\n.pat\n.ty\n.ty2\n.yw\n' +
                        '.sus\n.among\n.idk\n.ouch\n.eww\n.stress\n.hi5\n.clap\n.aww\n.oops\n'
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    if (message.content === '.mock') {

        if (message.author.id === '709659335554367510') {
            return message.channel.send("Go away Kelly you suck. You don't have the right to use this.");
        }

        let channel = message.channel// <-- your pre-filled channel variable

        channel.messages.fetch({ limit: 2 }).then(messages => {
            let lastMessage = messages.last();

            if (!lastMessage.author.bot) {
                // The author of the last message wasn't a bot
                return message.channel.send(firstLetterUppercase(lastMessage.content));
            }
        })
            .catch(console.error);
    }
})

function firstLetterUppercase (input) {
    let res = "";
    for (let i = 0; i < input.length; i++) {
        res += i % 2 === 0 ? input.charAt(i).toUpperCase() : input.charAt(i);
    }
    return res;
}


