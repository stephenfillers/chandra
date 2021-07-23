module.exports = {
    name: 'sweep',
    description: 'Deletes the most recent 50 messages.',
    execute(message, args) {
        const sweepNum = parseInt(args[0]);
        if (isNaN(sweepNum)) {
            return message.reply('that isn\'t a valid number.');
        } else if (sweepNum >= 1 && sweepNum < 100) {
            message.channel.bulkDelete(sweepNum + 1); // adding +1 accounts for the !sweep command call
            message.channel.send(`Done sweeping! I tried to delete the last ${sweepNum} item(s). Self-destruction imminent.`)
            setTimeout(() => {
                message.channel.bulkDelete(1);
            }, 5000);
        } else {
            return message.reply('you can\'t delete that many.')
        }
    },
};