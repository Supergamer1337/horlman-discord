// Array of sentences said by horlman.
const foodSentences = ['Sweet roll, nom nom nom…', 'SALLAD?!?! Do I look like a bitch to you?!', 'Clunk, clunk, clunk. AHHHH, *refreshing milk*!', 'Bless the nine divines! They have *pickled horker* on the menu!', 'Grilled leeks… Yay…'];

// Exported command
module.exports = {
    name: 'food',
    description: 'Helps you with food.',
    execute(message, args) {
        message.channel.send(foodSentences[Math.floor(Math.random() * foodSentences.length)]);
    }
}