// Insults
const insults = [
	'you make Garyan look like me!',
	'I’m not angry at you… Just… Disappointed…',
	'you are duller than a khajiit high on moon sugar!',
	'you are as weak as I am strong!',
	"do you even drink milk? I thought you didn't, at least not with those things you call arms!"
];

// Exported command
module.exports = {
	name: 'insult',
	usage: '[what to insult]',
	description: 'Well, an insult.',
	execute(message, args) {
		if (args[1]) {
			message.channel.send(
				args[1] +
					', ' +
					insults[Math.floor(Math.random() * insults.length)]
			);
		} else {
			message.reply(
				message.author.username +
					', ' +
					insults[Math.floor(Math.random() * insults.length)]
			);
		}
	}
};
