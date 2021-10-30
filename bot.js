const { auth } = require('./secure/info.json');
const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: auth,
  prefix: ["$getServerVar[prefix]"]
})

bot.MessageEvent();
bot.MessageEditEvent();
bot.onBan();
bot.onUnban();
bot.onBotJoin();
bot.onBotLeave();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onEmojiCreate();
bot.onEmojiDelete();
bot.onGuildUpdate();
bot.onJoined();
bot.onLeave();
bot.onMessageDelete();
bot.onRateLimit();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onUserUpdate();

require('./utils/status')(bot)
require('./utils/vars')(bot)

const fs = require('fs');
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command);
        console.log(`Command loaded: | Name: ${command.name} | OzzyNetwork`);
    }
}
const events = fs.readdirSync("./events/");for (const Files of events) {  
const eventFile = fs.readdirSync(`./events/${Files}/`).filter(file => file.endsWith(".js"))    
for (const event of eventFile) { 
const obj = require(`./events/${Files}/${event}`);  
if (typeof(obj) != "object") {
console.log("Problem with module.exports. Exited");
process.exit();}
const eventName = Object.keys(obj);
const eventData = Object.values(obj)[0];
if (typeof(eventData) != "object") {
if (typeof(eventData) != "number") {
console.log("Problem with an event. Exited");
process.exit();             }        }        bot[eventName](eventData);
if(bot.vars){
bot.Variables(eventData);        }
if(bot.awaitedCommands){
bot.AwaitedCommand(eventData);        }
console.log(`Event loaded: | Name: ${event} | OzzyNetwork`);    }}
