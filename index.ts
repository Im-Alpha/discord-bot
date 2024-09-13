import dotenv from "dotenv";
dotenv.config();

import {
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  Client,
  IntentsBitField,
  InteractionCollector,
  REST,
  Routes,
} from "discord.js";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Slash command REST setup
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];
  
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);
  
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID as string), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }


function timers(pomMinutes:number, pomBreak: number ) {
    pomMinutes = pomMinutes * 60;
    
    return true;
}


// Get Slash input
const slashClient = new Client({ intents: [IntentsBitField.Flags.Guilds] });

slashClient.on('ready', () => {
  console.log(`Logged in as ${slashClient.user!.tag}!`);
});

slashClient.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if(interaction.commandName === 'pomodoro'){
    await interaction.reply('Starting!')

  }
});


client.login(process.env.DISCORD_TOKEN as string);