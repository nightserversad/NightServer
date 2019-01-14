const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534412254020370460")
setInterval(function() {
channel.send(`A.B.N & S.Y.R.I.A`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
