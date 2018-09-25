const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (message) => {

    //SPECIAL(Per Request)

    //RUST
    if(message.content == "?add member") {
        message.reply("Added you to role member");
        let member = message.mentions.members.first();

        message.member.addRole("484360555721785344").then(console.log).catch(console.error);
    }
});

bot.login("process.env.BOT_TOKEN");
