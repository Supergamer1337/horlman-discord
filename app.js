// Import and create client
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const config = require('./config/config.json');

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING
	]
});

// Configuration
client.commands = new Collection();
const commandFiles = fs
	.readdirSync('./commands')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

// Print when bot is online to console
client.on('ready', () => {
	console.log(`Authenticated as ${client.user.tag}`);
});

// Text Commands
client.on('messageCreate', message => {
	// If sent by bot or does not contain prefix exit
	if (
		!message.content.toLowerCase().startsWith('horlman') ||
		message.author.bot
	)
		return;

	// Check for Horlman or Please
	if (message.content.toLowerCase().startsWith('horlman')) {
		// Prepare horlman prefix
		var args = message.content.slice('horlman'.length + 1).split(' ');
	}

	// Make sure that a command has been issued
	if (args[0] != undefined) {
		// Make commandName variable
		const commandName = args[0].toLowerCase();

		// Make command variable
		const command =
			client.commands.get(commandName) ||
			client.commands.find(
				cmd => cmd.aliases && cmd.aliases.includes(commandName)
			);

		// Check if command exists
		if (!command) return message.reply('that is not something I can do.');

		// Check for individual commands
		if (command.guildOnly && message.channel.type !== 'text') {
			return message.reply("I can't do that here in private!");
		}

		// Try and execute command
		try {
			command.execute(message, args, client);
		} catch (error) {
			console.log(error);
			message.reply('Something went wrong when I tried that.');
		}
	} else {
		message.reply("You didn't tell me to do anything.");
	}
});

// Discord bot login token
client.login(config.token);
