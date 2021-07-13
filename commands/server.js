module.exports = {
    name: 'server',
    description: 'Displays general server settings.',
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
    },
};