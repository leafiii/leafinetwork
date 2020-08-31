const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '='
const token = 'NzQwNjA1MTYyMDkwOTIyMDY0.XyrcTg.NxWoglZWAL-nEzJ74-J-hpChWVI'

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
    bot.user.setActivity('=help')
});

bot.on("message", msg => {
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)
    let args = msg.content.split(" ").slice(1)
    if (cmd === "help") {
        const embed = new Discord.MessageEmbed({
            "title": "Help Page",
            "color": 10653894,
            "footer": {
              "icon_url": author.image,
              "text": author.name
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "image": {
              "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "author": {
              "name": "author name",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "fields": [
              {
                "name": "=help",
                "value": "Sends This message!"
              },
            ]
          });
        msg.channel.send(embed)
    }
})

bot.login(token)