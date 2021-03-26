import Discord, { MessageEmbed } from "discord.js";
//import ms from "ms";
import * as dotenv from "dotenv";
const client = new Discord.Client();

dotenv.config();

const PREFIX: string = "!";

client.on("ready", () => {
  console.log(`The bot is online!`);
});

const version: string = "1.0.0";

client.on("message", (message) => {
  let args: any[] = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.send("Pong!");
      break;
    case "website":
      message.channel.send("https://github.com/RahulSharma099");
      break;
    case "info":
      if (!args[1]) {
        message.channel.send("Please Provide the required argument");
      } else if (args[1] === "version" || "Version") {
        message.channel.send("Version is 1.0.0");
      } else {
        message.channel.send("Invalid Args");
      }
      break;
    case "clear":
      if (!args[1]) {
        return message.reply("Error Please define a second Argument");
      }
      if (message.channel.type === "text") {
        message.channel.bulkDelete(args[1]);
      }
      break;
    case "embed":
      const embed = new Discord.MessageEmbed()
        .setTitle("User Information")
        .addField("Player Name ", message.author.username, true)
        .addField("version is ", version, true)
        .addField("Current server", message.guild?.name)
        .setColor("#F1C40f")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter("Made with 💕 by Rahul Sharma");
      message.channel.send({ embed });
      break;
  }
});

client.login(process.env.TOKEN);
