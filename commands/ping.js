module.exports = {
  data: {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  async execute(message) {
    await message.reply('Pong! 🐸');
  },
};