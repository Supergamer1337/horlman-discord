module.exports = {
    name: 'say',
    description: 'You know...',
    aliases: ['very', 'good', 'please'],
    usage: '[sentence of what to say]',
    execute(message, args) {
        // Spaghetti and unoptimized code (like for real though, I need to fix this for V1.01)
        if(args.some(v => v.toLowerCase() == 'garyan')) {
            message.channel.send('Garyan really needs to stop drinking...')

        } else if(args.some(v => v.toLowerCase() == 'ahrune')) {
            message.channel.send('A-harune is a good friend… But he scares me.')

        } else if(args.some(v => v.toLowerCase() == 'groove')) {
            message.channel.send('That man Groove sure loves beans.')

        } else if(args.some(v => v.toLowerCase() == 'zedric')) {
            message.channel.send('Zedric once snuck up on me when I was taking a bath… Strange man.')

        } else if(args.some(v => v.toLowerCase() == 'tainika')) {
            message.channel.send('PLEASE GOD NO!')
            
        } else if(args[1] !== 'it' && args[1]) {
            args.shift();
            const sentence = args.join(' ');
            message.channel.send(`Ok, "${sentence}"`);
        } else {
            message.channel.send('*Very GOOD!*');
        }
    }
}