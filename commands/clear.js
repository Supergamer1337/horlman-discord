module.exports = {
    name: 'clear',
    description: 'Clears messages.',
    usage: '[number]',
    execute(message, args) {
        // Check if user has neccessary permissions.
        if(message.member.permissions.has('MANAGE_MESSAGES') || message.member.permissions.has('ADMINISTRATOR')) {
            const amount = parseInt(args[1]) + 1;

            if(isNaN(amount)) {
                return message.channel.send('You need to be more specific! RAAAAAAAAH!');
            } else if(amount > 100) {
                return message.channel.send('99 tops, dumbass!');
            } else if (amount < 2) {
                return message.channel.send('AM I SUPPOSED TO DELETE ZERO MESSAGES?!');
            }

            message.channel.bulkDelete(amount)
                .then(() => message.channel.send(`RAAAAAAAAH!… I have successfully obliterated ${amount-1}!`))
                .catch(err => {
                    console.log(err);
                    message.channel.send('RAAAAAAAAH!… The messages were too strong… I am sorry...');
                });
        } else {
            message.reply('You don’t have the right to boss me around! Tiny man.');
        }
    }
}