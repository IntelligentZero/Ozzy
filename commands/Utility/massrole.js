module.exports = ({
    name: "massrole",
    description: "Adds a single role to every user in the server.",
    usage: "massrole <@role>",
    aliases: [''],
    code: `
    $massRole[add;$mentionedRoles[1]]
    $title[**Successfully added role!**]
    $description[**Added role to $membersCount members.**]
    $color[RANDOM]
    $channelSendMessage[817979707735408681;{title:**Command Executed!**}
        {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
        {color:RANDOM}]
    $onlyPerms[manageserver;{title:**Invalid Permissions!**}
            {description:**You need the \`MANAGE_SERVER\` permission to ban massrole.**}
        {color:RED}]
    $globalCooldown[5m;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    `
})