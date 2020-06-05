// Imports
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Tells you what Horlman can do.',
    execute(message, args) {
        // Construct embed
        const embed = new Discord.MessageEmbed()
            .setTitle('Things I can help with')
            .setColor('#0055FF')
            .setThumbnail('https://cdn.discordapp.com/attachments/706076700080996393/706076730015875102/unknown.png')
            .addFields(
                { name: 'food', value: 'Helps you with food.' },
                { name: 'clear', value: 'Clears messages.' },
                { name: 'insult', value: 'Well, an insult.' },
                { name: 'conscious', value: 'Tells you the version of Horlman\'s conscious.' },
                { name: 'sayit', value: 'You know...' }
            )
        // Send embed
        message.channel.send(embed);
    }
}