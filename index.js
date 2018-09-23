const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (message) => {

    //SPECIAL(Per Request)

    //RUST
    if(message.content == "?add rust") {
        message.reply("Added you to role Rust");
        let member = message.mentions.members.first();

        message.member.addRole("484360555721785344").then(console.log).catch(console.error);
    }
    if(message.content == "?remove rust") {
        message.reply("Removed you from role Rust");
        let member = message.mentions.members.first();

        message.member.removeRole("484360555721785344").catch(console.error);
    }

    //OVERWATCH
    if(message.content == "?add overwatch") {
        message.reply("Added you to role Overwatch");
        let member = message.mentions.members.first();

        message.member.addRole("484360645924356108").catch(console.error);
    }
    if(message.content == "?remove overwatch") {
        message.reply("Removed you from role Overwatch");
        let member = message.mentions.members.first();

        message.member.removeRole("484360645924356108").catch(console.error);
    }

    //PUBG
    if(message.content == "?add pubg") {
        message.reply("Added you to role PUBG");
        let member = message.mentions.members.first();

        message.member.addRole("484360676240916481").then(console.log).catch(console.error);
    }
    if(message.content == "?remove pubg") {
        message.reply("Removed you from role PUBG");
        let member = message.mentions.members.first();

        message.member.removeRole("484360676240916481").catch(console.error);
    }

    //PLANET SIDE 2
    if(message.content == "?add planet side 2") {
        message.reply("Added you to role Plantet Side 2");
        let member = message.mentions.members.first();

        message.member.addRole("484360717412335657").then(console.log).catch(console.error);
    }
    if(message.content == "?remove planet side 2") {
        message.reply("Removed you from role Planet Side 2");
        let member = message.mentions.members.first();

        message.member.removeRole("484360717412335657").catch(console.error);
    }

    //CSGO
    if(message.content == "?add csgo") {
        message.reply("Added you to role CSGO");
        let member = message.mentions.members.first();

        message.member.addRole("484360738517811203").then(console.log).catch(console.error);
    }
    if(message.content == "?remove csgo") {
        message.reply("Removed you from role CSGO");
        let member = message.mentions.members.first();

        message.member.removeRole("484360738517811203").catch(console.error);
    }

    //ROCKET LEAGUE
    if(message.content == "?add rocket league") {
        message.reply("Added you to role Rocket League");
        let member = message.mentions.members.first();

        message.member.addRole("484360761590808579").then(console.log).catch(console.error);
    }
    if(message.content == "?remove rocket league") {
        message.reply("Removed you from role Rocket League");
        let member = message.mentions.members.first();

        message.member.removeRole("484360761590808579").catch(console.error);
    }

    //GTA
    if(message.content == "?add gta") {
        message.reply("Added you to role GTA");
        let member = message.mentions.members.first();

        message.member.addRole("484375510638657547").then(console.log).catch(console.error);
    }
    if(message.content == "?remove gta") {
        message.reply("Removed you from role GTA");
        let member = message.mentions.members.first();

        message.member.removeRole("484375510638657547").catch(console.error);
    }

    //CASUAL
    if(message.content == "?add casual") {
        message.reply("Added you to role Casual");
        let member = message.mentions.members.first();

        message.member.addRole("484373477332353044").then(console.log).catch(console.error);
    }
    if(message.content == "?remove casual") {
        message.reply("Removed you from role Casual");
        let member = message.mentions.members.first();

        message.member.removeRole("484373477332353044").catch(console.error);
    }
});

bot.login("NDg0MzYyODM2Njg5Mjg5MjE2.DmiHWA.2NZvbdG94jGDct7_r1lRH-8PTos");
