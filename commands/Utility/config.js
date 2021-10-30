module.exports = ({
    name: "config",
    description: "Get the server configuration.",
    aliases: [''],
    usage: "config",
    code: `
    $title[**$guildName's Configuration!**]
    $description[**Antilink status: \`$getServerVar[antilink]\`
    Prefix: \`$getServerVar[prefix]\`
    Logging status: \`$getServerVar[logs]\`
    Logging channel: <#$getServerVar[channel]>
    Autorole status: \`$getServerVar[autorole]\`
    Autorole role: <@&$getServerVar[role]>**]
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