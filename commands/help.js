module.exports = {
  data: {
    name: 'help',
    description: 'Lists all available commands.',
  },
  async execute(message) {
    await message.reply('Available commands: `!ping`, `!help`');
  },
};