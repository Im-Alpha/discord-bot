const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pomodoro')
		.setDescription('Start a new timer!'),
	async execute(interaction) {
		await interaction.reply('Starting!');
	},
};