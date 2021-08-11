const {
	joinVoiceChannel,
	createAudioPlayer,
	NoSubscriberBehavior,
	createAudioResource,
	AudioPlayerStatus,
	generateDependencyReport
} = require('@discordjs/voice');
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
	execute(message, args) {}
};
