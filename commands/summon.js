module.exports = {
    name: 'summon',
    description: 'Summons the bot to a voice channel.',
    async execute(message, args) {
        const ytdl = require('ytdl-core');
        const songSelection = args[0];
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            connection.play(ytdl(songSelection, { filter: 'audioonly' }));
        } else {
            message.reply('You need to join a voice channel first!');
        }
    },
};