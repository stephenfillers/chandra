module.exports = {
    name: 'roll',
    description: 'Rolls a dice of various sizes.',
    execute(message, args) {
        const sides = parseInt(args[0]);
        if (isNaN(sides)) {
            		return message.reply('that isn\'t a valid number.');
        } else if (sides === 4 || sides === 6 || sides === 8 || sides === 10 || sides === 12 || sides === 20) {
            return message.channel.send(`Rolling a d${sides}. Your roll is ${Math.floor(Math.random() * sides) + 1}.`);
        } else {
            return message.reply('I can only accept a 4, 6, 8, 10, 12, or 20-sided dice.')
	}
    },
};