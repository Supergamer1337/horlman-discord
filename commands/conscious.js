// Imports
const { version } = require('../package.json');

module.exports = {
    name: 'conscious',
    aliases: ['version'],
    description: 'Tells you the version of Horlman\'s conscious.',
    execute(message, args) {
        message.channel.send(`This is version ${version} of my consciousness.`);
    }
}