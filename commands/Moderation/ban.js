module.exports = ({
    name: "ban",
    description: "Bans a member from the server.",
    aliases: [""],
    usage: "ban <@member>",
    code: `
    $ban[$mentioned[1];$guildID;$messageSlice[>1]]
    $title[**Member banned!**]
    $description[**$username banned $tag[$mentioned[1]]
    Reason: $messageSlice[>1]**]
    $color[RANDOM]
    $ban[$mentioned[1];$guildID;$messageSlice[>1]]
    $suppressErrors[**Does the user have higher roles than me? Did you mention a valid person?**]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    $channelSendMessage[817979707735408681;{title:**Command Executed!**}
        {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
        {color:RANDOM}]
    $onlyBotPerms[ban;{title:**Invalid BOT Permissions!**}
        {description:I must have the \`{perms}\` permission}
    {color:RED}]
    $argsCheck[>2;{title:**Invalid arguments!**}
        {description:**Usage: ban <@user> <reason>**}
    {color:RED}]
    $onlyPerms[ban;{title:**Invalid Permissions!**}
        {description:**You need the \`BAN\` permission to ban a user.**}
    {color:RED}]
        `
})
