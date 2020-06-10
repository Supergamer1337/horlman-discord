module.exports = {
    name: 'clear',
    description: 'Clears messages.',
    usage: '[number]',
    execute(message, args) {
        // Check if user has neccessary permissions.
        if(message.member.permissions.has('MANAGE_MESSAGES') || message.member.permissions.has('ADMINISTRATOR')) {
            const amount = parseInt(args[1]) + 1;

            if(isNaN(amount)) {
                return message.channel.send('You need to tell me a **NUMBER** of messages to take away!');
            } else if(amount < 2 || amount > 100) {
                return message.channel.send('I can only take away 1 to 99 messages!');
            }

            message.channel.bulkDelete(amount)
                .then(() => message.channel.send(`I have now taken away ${amount - 1} messages.`))
                .catch(err => {
                    console.log(err);
                    message.channel.send('I was unable to take away these messages.');
                });
        } else {
            message.reply('you are not allowed to do that.');
        }
    }
}