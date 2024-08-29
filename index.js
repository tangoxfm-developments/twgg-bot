const { Client, GatewayIntentBits, Message, Partials, GuildMember } = require("discord.js")
const { TwggBotName} = require("./name.json")
require("dotenv/config")
const EventEmitter = require('events')
const { read } = require("fs")
const emitter = new EventEmitter()
EventEmitter.defaultMaxListeners = 100
console.log(`registering imports... `)
console.log(`imports registerd \n logging in ${TwggBotName}`)

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Message,
        Partials.Reaction,
    ]
})

client.on('ready', () => {
    console.log(`${TwggBotName} has connected to discord and is now online and ready to execute commands `)
})


client.on("messageCreate", async message => {
    if (message.content === "!gay?") {
        const reply = await message.reply('are you gay?')
        reply.react("✅"),
        reply.react("❌")
    }
})

client.on("messageReactionAdd", async (reaction) => {
    if (reaction.partial) {
        await reaction.fetch()
    }

    console.log(reaction)
})



client.on("messageCreate", async message => {
    if (message.content === "!test") {
        const reply = await message.reply("bot is online ✅ \n \n commands working ✅ \n \n being TWGG'S SlAVE ✅\n \n powered by tangoxfm developments ✅ \n \n is gay ❌ \n\n bot diagnosis test complete (bot is 99% working✅✅✅) ")
        reply.react("✅")
    }
})


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!devs") {
        message.reply("# the devs of this bot are: \n \n **tangoxfm developments**")
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "<@1277058843750170757>") {
        message.reply("need to know the commands? try !commands or !cmds")
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!commands") {
        message.reply("# here is a list of commands \n \n **!test** \n \n **!devs** \n \n **!commands/!cmds** \n \n **watch twgg** \n \n **twgg yt / twgg youtube**\n \n **twgg twitch** \n\n**!gay** \n\n**!gay?** \n\n <@892864169316077621> \n\n **hello <@1277058843750170757>**")
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!cmds") {
        message.reply("# here is a list of commands \n \n **!test** \n \n **!devs** \n \n **!commands/!cmds** \n \n **watch twgg** \n \n **twgg yt / twgg youtube**\n \n **twgg twitch** \n\n**!gay** \n\n**!gay?** \n\n <@892864169316077621> \n\n **hello <@1277058843750170757>**")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "watch TWGG") {
        message.reply("hey there i heard you want to watch TWGG \n \n [TWITCH](https://www.twitch.tv/twgg440) \n \n [YOUTUBE](https://www.youtube.com/@Twgg440)")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "watch twgg") {
        message.reply("hey there i heard you want to watch TWGG \n \n [**TWITCH**](https://www.twitch.tv/twgg440) \n \n [**YOUTUBE**](https://www.youtube.com/@Twgg440)")
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "twgg youtube") {
        message.reply("you can watch twgg on yt [**here**](https://www.youtube.com/@Twgg440)")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "twgg twitch") {
        message.reply("you can watch twgg on twitch [**here**](https://www.twitch.tv/twgg440)")
    }
})

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "twgg yt") {
        message.reply("you can watch twgg on yt [**here**](https://www.youtube.com/@Twgg440)")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "kill bot !exetango") {
        message.reply("command executed successfully!, killing bot now \n \n bot is online ❌\n\n commands working ❌ \n \nbeing TWGG'S SlAVE ✅ \n \n powered by tangoxfm developments ✅ \n \n is gay ❌  \n \ bot diagnosis test complete (bot is 0.01% working✅✅✅)  ")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "kill bot !exetango") {
        message.reply("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!gay") {
        message.reply("ewww! i hate those (community made command)")
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "<@892864169316077621>") {
        message.reply("the epik duck is coming!")
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!!ping") {
        message.reply(`***API Latency: (reaction time)*** \n**${client.ws.ping}ms** `)
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "hello <@1277058843750170757>") {
        message.reply(`hello how are you?`)
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!!twggwebsite") {
        message.reply(`https://tangoxfm-developments.github.io/twggwebsite/mainPage.html`)
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!!secret cmds") {
        message.reply(`\n\n **kill bot !exetango** \n\n **!!ping** \n\n**!!twgg Website** `)
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!!secret") {
        message.reply(`\n\n **kill bot !exetango** \n\n **!!ping** \n\n**!!twgg Website** `)
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!!secret commands") {
        message.reply(`\n\n **kill bot !exetango** \n\n **!!ping** \n\n**!!twgg Website** `)
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!exetango secret commands") {
        message.reply(`\n\n **kill bot !exetango** \n\n **!!ping** \n\n**!!twgg Website** `)
    }
});

client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "!exetango secret cmds") {
        message.reply(`\n\n **kill bot !exetango** \n\n **!!ping** \n\n**!!twgg Website** `)
    }
});


client.on("messageCreate", async (message) => {
    if (message.content.toLocaleLowerCase() === "<@892864169316077621> meme") {
        message.reply(`https://cdn.discordapp.com/attachments/1277047911456313411/1278524895642386513/Autotune.mp4?ex=66d11e98&is=66cfcd18&hm=851fd13b25637aafdf43b0aff25dd0541cc40f38589b09c0e1d2a36d75b19faa&`)
    }
});




client.login(process.env.token)