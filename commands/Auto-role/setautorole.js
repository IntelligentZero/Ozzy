module.exports = ({
    name: "setautorole",
    description: "Set's the autorole role.",
    usage: "setautorole <roleID>",
    aliases: [''],
    code: `
    $title[**Successfully set the autorole role!**]
    $description[**Autorole role is now: \`$getServerVar[role]\`**]
    $setServerVar[role;$message[];$guildID]
    $color[RANDOM]
    $channelSendMessage[817979707735408681;{title:**Command Executed!**}
        {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RANDOM}]
    $onlyIf[$message[1]!=;{title:**Incorrect Arguments!**}
    {description:**Please input a role ID!**}
    {color:RED}]
    $onlyPerms[manageserver;{title:**Invalid Permissions!**}
        {description:You need \`MANAGE_SERVER\` permissions to execute this command.}
        {color:RED}]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    `
})