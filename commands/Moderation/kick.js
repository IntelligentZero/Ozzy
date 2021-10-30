module.exports = ({
    name: "kick",
    description: "Kick a member from the server.",
    usage: "kick <@member>",
    aliases: [""],
    code: `
    $title[**Successfully kicked!**]
    $description[**Successfully kicked user.**]
    $color[RANDOM]
    $kick[$mentioned[1];$messageSlice[>1]]
    $suppressErrors[**Does the user have higher roles than me? Did you mention a valid person?**]
    $onlyBotPerms[kick;{title:**Invalid BOT permissions!**}
        {description:I must have the \`{perms}\` permission}
    {color:RED}]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    $argsCheck[>2;{title:**Invalid arguments!**}
        {description:**Usage: kick <@user> <reason>**}
    {color:RED}]
    $onlyPerms[kick;{title:**Invalid permissions!**}
        {description:**You need the \`KICK\` permission to kick a user.**}
    {color:RED}]
    $channelSendMessage[817979707735408681;{title:**Command Executed!**}
        {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
        {color:RANDOM}]
    `
})