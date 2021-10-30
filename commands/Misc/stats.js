module.exports = ({
    name: "stats",
    description: "Shows statistical information about the bot.",
    aliases: ["botinfo"],
    usage: "stats",
    code: `
    $title[**$client[name]'s statistical information.**]
   $description[\`\`\`js
   Bot Uptime - $uptime
       Database ping - $dbPingms
       $guildCount - Servers
       $allMembersCount - Users
       $commandCount - Command Count
       $eventsCount - Event Count
       $memoryMB - Amount of memory being used
       $hostCPU[currentload] - Current CPU Load
       $hostCPU[avgload] - CPU Average Load
       $hostCPU[brand] - CPU model
       "$getVar[version]" - Ozzy Version
       "$getVar[state]" - State
       "$packageVersion" - DB-Script
       "$username[750440594056151301]#$discriminator[750440594056151301]" - Owner | Head Developer
       "$username[665516125072916480]#$discriminator[665516125072916480]" - Developer\`\`\`]
        $color[RANDOM]
        $channelSendMessage[817979707735408681;{title:**Command Executed!**}
            {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
            {color:RANDOM}]
        $globalCooldown[10s;{title:**You are on a cooldown!**}
            {description:**Please wait {time} before using this command again. Command: $cmd**}
            {footer:Spamming will result in a blacklist.}
            {color:RED}]
    `
})