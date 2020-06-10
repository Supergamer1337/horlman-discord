module.exports = {
    name: 'sayit',
    description: 'You know...',
    aliases: ['very', 'good', 'please'],
    execute(message, args) {
        message.channel.send('*Very GOOD*');
    }
}