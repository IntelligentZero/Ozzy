module.exports = ({
    name: "stats",
    description: "Shows statistical information about the bot.",
    aliases: ["botinfo"],
    usage: "stats",
    code: `
    $title[**$client[name]'s statistical information.**]
    $addField[Server Count;**
    $guildCount.**;no]
    $addField[Command Count;**
        $commandCount.**;no]
    $addField[Uptime;
    **$uptime**;no]
    $addField[User Count;**
        $allMembersCount.**;no]
    $addField[Developer;**
        $username[750440594056151301]#$discriminator[750440594056151301]
        **;no]
    $addField[Package;**
        DB-Script ver $packageVersion
        **;no]
    $addField[Version;**
        Ozzy ver $getVar[version]
        **;no]
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