module.exports = {
    name: 'sweep',
    description: 'Deletes the most recent 50 messages.',
    execute(message, args) {
        message.channel.bulkDelete(50);
    },
};