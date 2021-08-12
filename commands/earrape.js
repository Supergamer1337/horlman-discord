const fs = require('fs');
const path = require('path');

/* Get all earrape mp3s */
const audioFiles = [];

const earrapes = fs
	.readdirSync(path.join(__dirname, '../assets/earrape/'))
	.filter(file => file.endsWith('.mp3'));

for (const earrape of earrapes) {
	audioFiles.push(path.join(__dirname, `../assets/earrape/${earrape}`));
}

/*
  Join channel of message author, and play one of earrapes .mp3s.
*/
module.exports = {
	name: 'earrape',
	description: 'Plays random earrape line.',
	async execute(message, args) {
		const VC = message.member.voice.channel;

		if (!VC)
			return message.reply(
				'You are not in a place I can scream at you! (Not in voice channel)'
			);

		// Establish connection and resources.
		const connection = await VC.join();

		const dispatcher = connection.play(
			audioFiles[Math.floor(Math.random() * audioFiles.length)]
		);

		dispatcher.on('finish', () => {
			dispatcher.destroy();
			VC.leave();
		});
	}
};
