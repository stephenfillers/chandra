const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Chandra online');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong');
	} else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar')
		}
		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
		message.channel.send(`First argument: ${args[0]}`);
	} else if (command === 'sweep') {
		message.channel.bulkDelete(5);
	} else if (command === 'help') {
		message.reply(`my name is Chandra. I don't know how to do much *yet*, but my developer is hard at work to make me the best bot I can be.`)
		message.channel.send(`Here are a few commands that I understand:\n\n!server\n!user\n!ping`)
	} else if (command === 'roll') {
		const sides = parseInt(args[0]);
		if (isNaN(sides)) {
			return message.reply('that isn\'t a valid number.');
		} else if (sides === 4 || sides === 6 || sides === 8 || sides === 10 || sides === 12 || sides === 20) {
			return message.channel.send(`Rolling a d${sides}. Your roll is ${Math.floor(Math.random() * sides) + 1}.`);
		} else {
			return message.reply('please roll a valid D&D die. I accept d4, d6, d8, d10, d12, or d20.')
		}
	}
});

client.login(token);

// else if (command === 'server') {
// 	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
// } else if (command === 'user') {
// 	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
// } 