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

    $suppressErrors[{title:Error!}
{description:**An error occured. Did you input a valid role?**
The error has been reported to the developers.
ERROR CODE: \`$randomString\`}
{color:RED} 
$channelSendMessage[900332957275942975;{title:Error Reported!}
{description:An error occured in $guildName[$guildID]! | Command: \`$cmd\` | Error Code: \`$randomString\` | Format used: $message[]}
{color:RED}]]
        $onlyIf[$message[1]!=;{title:**Incorrect Arguments!**}
        {description:**Please input a role**}
        {color:RED}]
    $onlyPerms[manageserver;{title:**Invalid Permissions!**}
            {description:**You need the \`MANAGE_SERVER\` permission to massrole.**}
        {color:RED}]
    $globalCooldown[5m;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    `
})