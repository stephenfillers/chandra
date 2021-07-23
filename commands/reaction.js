module.exports = {
    name: 'music',
    description: 'Takes action based on reaction.',
    async execute(message, args) {
        const ytdl = require('ytdl-core');
        const songSelection = 'https://youtu.be/rYtJZAn7by4';
        if (message.member.voice.channel) {
            message.channel.send('Which playlist should I play?')
                .then(question => {
                    question.react('👍');
                    question.react('👎');
                })
        } else { message.reply('You need to join a voice channel first!') }

        // Set a filter to ONLY grab those reactions & discard the reactions from the bot
        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && !user.bot;
        };

        // Create the collector
        const collector = question.createReactionCollector(filter, {
            max: 1,
            time: 15000
        });

        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                message.reply('Ran out of time ☹...');
            } else {
                // Grab the first reaction in the array
                let userReaction = collected.array()[0];
                // Grab the name of the reaction (which is the emoji itself)
                let emoji = userReaction._emoji.name;

                // Handle accordingly
                if (emoji === '👍') {
                    const connection = message.member.voice.channel.join();
                    connection.play(ytdl(songSelection, { filter: 'audioonly' }));
                    message.reply('Glad your reaction is 👍!');
                } else if (emoji === '👎') {
                    message.reply('Sorry your reaction is 👎');
                } else {
                    // This should be filtered out, but handle it just in case
                    message.reply(`I dont understand ${emoji}...`);
                }
            }
        })
    },
}