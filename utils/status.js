console.log(`Status loaded!`);
const Dlang = require('discordbot-script')
const bot = new Dlang({
})
bot.Status({
   0: {
       description: "Providing tools to $guildCount servers. | Version $getVar[version]", 
       type: "PLAYING" 
   }
}, 13000)