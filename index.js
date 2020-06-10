// Import and create client
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

// Configuration
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// Print when bot is online to console
client.on('ready', () => {
    console.log('Bot online...');
});

// Text Commands
client.on('message', message => {
    // If sent by bot or does not contain prefix exit
    if(!message.content.toLowerCase().startsWith('horlman') && !message.content.toLowerCase().startsWith('please') || message.author.bot) return;

    // Check for Horlman or Please
    if(message.content.toLowerCase().startsWith('horlman')) {
        // Prepare horlman prefix
        var args = message.content.slice('horlman'.length + 1).split(' ');

        if (args[0].toLowerCase() !== 'please') {
            return message.channel.send('You didn\'t say the magic word.');
        }
    } else {
        // Prepare please prefix
        var args = message.content.slice('please'.length + 1).split(' ');

        if (args[0].toLowerCase() !== 'horlman') {
            return message.channel.send('You didn\'t say my name.');
        }
    }

    // Remove please or horlman as first argument
    args.shift();

    // Make sure that a command has been issued
    if(args[0] != undefined) {
        // Make commandName variable
        const commandName = args[0].toLowerCase();

        // Make command variable
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        // Check if command exists
        if(!command) return message.reply('that is not something I can do.');

        // Check for individual commands
        if (command.guildOnly && message.channel.type !== 'text') {
            return message.reply('I can\'t execute that command inside DMs!');
        }

        // Try and execute command
        try {
            command.execute(message, args);
        } catch (error) {
            console.log(error);
            message.reply('something went wrong when I tried that.');
        }
    } else {
        message.reply('you didn\'t tell me to do anything.');
    }
});


client.login(config.token);