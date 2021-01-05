require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client();
const pfx = "$";

//helpers
const Rpg = require("./helpers/rpg");

// do stuff
client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.username} is awake!`);
});

client.on("message", (message) => {
  const { channel, author, content } = message;
  if (author.bot) return;
  if (content)
  if (content.startsWith(pfx)) {
    const [cmdName, ...args] = content
      .trim()
      .substring(pfx.length)
      .split(/\s+/);
    try {
      switch (cmdName) {
        case "greet":
          channel.send(`What's good ${author.username}?`);
          break;
        case "r":
          const roll = Rpg.diceRoll(...args);
          channel.send(`${author} \`\`\`Output:\n${roll}\`\`\``);
          break;
      }
    } catch (error) {
      channel.send("EXCUSE ME?");
    }
  }
});
