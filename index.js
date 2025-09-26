// Load environment variables from .env file
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Bot is ready and logged in
client.on('clientReady', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Simple !ping command
  if (message.content === '!ping') {
    await message.reply('Pong! 🐸');
  }
});

// Handle errors
client.on('error', (error) => {
  console.error('❌ Discord client error:', error);
});

// Log in to Discord with your bot token
client.login(process.env.BOT_TOKEN);