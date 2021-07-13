module.exports = {
    name: 'help',
    description: 'Provides some helpful information.',
    execute(message, args) {
        message.reply(`my name is Chandra. I don't know how to do much *yet*, but my developer is hard at work to make me the best bot I can be. Here are a few commands that I understand:\n\n!server\n!user\n!ping\n!roll`);
    },
};