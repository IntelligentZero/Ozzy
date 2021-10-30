module.exports = ({
    name: "unban",
    description: "Unbans a member from the guild.",
    aliases: [""],
    usage: "unban <ID>",
    code: `
    $title[**Member unbanned!**]
    $description[**$username unbanned $tag[$message[1]]
    Reason: $messageSlice[>1]**]
    $color[RANDOM]
    $unban[$message[1];$guildID;$messageSlice[>1]]
    $suppressErrors[**Did you provide a valid user ID?**]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
$onlyIf[$messageSlice[>1]!=;{title:**Invalid Arguments!**}
{description:**Please provide a reason.**}
{color:RED}]
$onlyIf[$userExists[$message[1]]==true;{title:**Invalid Arguments!**}
{description:**Invalid usage. Please use their ID. You can get their ID by enabling developer mode in your settings, right clicking on their user and left clicking the copy ID option. Once done, Use the command as follows. \`unban <ID>\`}
{color:RED}]
$onlyBotPerms[ban;{title:**Invalid BOT Permissions!**}
    {description:I must have the \`{perms}\` permission}
{color:RED}]
$onlyPerms[ban;**You need the \`BAN\` permission to unban a user.**]
$channelSendMessage[817979707735408681;{title:**Command Executed!**}
    {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RANDOM}]
`
})
