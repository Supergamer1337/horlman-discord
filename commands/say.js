module.exports = {
    name: 'say',
    description: 'You know...',
    aliases: ['very', 'good', 'please'],
    execute(message, args) {
        if(args[1] !== 'it') {
            args.shift();
            const sentence = args.join(' ');
            message.channel.send(`Ok, "${sentence}"`);
        } else {
            message.channel.send('*Very GOOD!*');
        }
    }
}