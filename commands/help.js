const { MessageEmbed } = require('discord.js');

/* 
    This command gets all command names, and sends it to the user in the form of an embed.
    If followed by argument, returns specific for that command.
*/
module.exports = {
	name: 'help',
	aliases: ['commands'],
	usage: '[command name]',
	description: 'Tells you what Horlman can do.',
	execute(message, args) {
		const { commands } = message.client;

		if (args.length < 2) {
			const messageEmbed = new MessageEmbed({})
				.setTitle('Horlman Commands')
				.addFields(
					commands.map(command => {
						return {
							name: command.name,
							value: `Description: ${command.description}`
						};
					})
				);

			return message.author
				.send(messageEmbed)
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply("I've told you in private what I can do!");
				})
				.catch(error => {
					console.error(
						`Could not send help DM to ${message.author.tag}.\n`,
						error
					);
					message.reply(
						"it seems like I can't tell you in private! Have you told people to leave you alone?"
					);
				});
		}

		const name = args[1].toLowerCase();
		const command =
			commands.get(name) ||
			commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply("that's not a thing I can do!");
		}

		const fields = [];
		fields.push({ name: 'Description', value: command.description });
		if (command.aliases) {
			fields.push({ name: 'Aliases', value: command.aliases.join(', ') });
		}
		if (command.usage) {
			fields.push({ name: 'Usage', value: command.usage });
		}

		const messageEmbed = new MessageEmbed()
			.setTitle(command.name.toUpperCase())
			.addFields(fields);

		message.author
			.send(messageEmbed)
			.then(() => {
				if (message.channel.type === 'dm') return;
				message.reply("I've told you in private about that command.");
			})
			.catch(error => {
				console.error(
					`Could not send help DM to ${message.author.tag}.\n`,
					error
				);
				message.reply(
					"it seems like I can't tell you in private! Have you told people to leave you alone?"
				);
			});
	}
};
