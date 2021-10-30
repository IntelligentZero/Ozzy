module.exports = ({
    name: "setlogschannel",
    aliases: "logschannel",
    usage: "setlogschannel <#channel>",
    code: `
    $title[**Successfully set the logs channel!**]
    $description[**Success! Logging channel is now \`$getServerVar[channel]\`. Set by: $username[$authorID]#$discriminator[$authorID]**]
    $color[RANDOM]
    $setServerVar[channel;$message[]]
    $onlyIf[$message[1]!=;{title:**Failure!**}
    {description:**Please input a channel ID.**}
    {color:RED}]
    $onlyIf[$getServerVar[logs]==enabled;{title:**Failure!**}
    {description:**Please enable the logging system first!**}
    {color:RED}]
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