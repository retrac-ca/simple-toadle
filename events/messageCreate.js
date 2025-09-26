module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    const prefix = '!';
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    try {
      await client.commands.get(commandName).execute(message);
    } catch (error) {
      console.error(error);
      await message.reply('There was an error executing that command!');
    }
  },
};