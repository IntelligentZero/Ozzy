module.exports = ({
    name: "ping",
    description: "Shows information about the connection of the bot to Discord's API.",
    aliases: [""],
    usage: "ping",
    code: `
    $title[**Pong!**]
    $description[**Latency:** \`$pingms\`
    **Database latency:** \`$dbPingms\`
    **State:** \`$getServerVar[state]\`]
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