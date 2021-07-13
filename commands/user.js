module.exports = {
    name: 'user',
    description: 'Displays settings about the current user.',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};


