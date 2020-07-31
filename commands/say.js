module.exports = {
    name: 'say',
    description: 'You know...',
    aliases: ['very', 'good', 'please'],
    usage: '[sentence of what to say]',
    execute(message, args) {
        // Check if sentence contains keyword
        for(let i = 1; i < args.length; i++) {
            // Make string lowercase
            let word = args[i].toLowerCase();

            // Check if it matches word in list
            if(word == 'garyan') return message.channel.send('Garyan really needs to stop drinking...');
            if(word == 'ahrune') return message.channel.send('A-harune is a good friend… But he scares me.');
            if(word == 'groove') return message.channel.send('That man Groove sure loves beans.');
            if(word == 'zedric') return message.channel.send('Zedric once snuck up on me when I was taking a bath… Strange man.');
            if(word == 'tainika') return message.channel.send('PLEASE GOD NO!');
        }

        if(args[1] !== 'it' && args[1] || args[2]) {
            args.shift();
            const sentence = args.join(' ');
            message.channel.send(`Ok, "${sentence}"`);
        } else {
            message.channel.send('*Very GOOD!*');
        }
    }
}