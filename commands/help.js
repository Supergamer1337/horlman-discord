// Imports
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['commands'],
    usage: '[command name]',
    description: 'Tells you what Horlman can do.',
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (args.length < 2) {
            
            data.push('Here\'s all the things I can do:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can ask me of a specific thing by saying help [thing]!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve told you in private what I can do!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t tell you in private! Have you told people to leave you alone?');
                });

        }

        const name = args[1].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a thing I can do!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** horlman please ${command.name} ${command.usage}`);

        message.channel.send(data, { split: true });
    }
}