module.exports = ({
    name: "disableautorole",
    description: "Disable the autorole configuration for the server.",
    usage: "disableautorole",
    aliases: [''],
    code: `
    $title[**Successfully disabled the autorole system!**]
    $description[**Autorole status set to: \`$getServerVar[autorole;$guildID]\`**]
    $color[RANDOM]
    $setServerVar[autorole;false;$guildID]
    $channelSendMessage[817979707735408681;{title:**Command Executed!**}
        {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RANDOM}]
    $onlyPerms[manageserver;{title:**Invalid Permissions!**}
        {description:You need \`MANAGE_SERVER\` permissions to execute this command.}
        {color:RED}]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    `
})