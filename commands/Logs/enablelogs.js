module.exports = ({
    name: "enablelogs",
    aliases: "enableloggingsystem",
    usage: "enablelogs",
    code: `
    $title[**Successfully enabled logs!**]
    $description[**Success! Logging status is now \`$getServerVar[logs]\`. Set by: $username[$authorID]#$discriminator[$authorID]**]
    $color[RANDOM]
    $setServerVar[logs;enabled]
    $onlyIf[$getServerVar[logs]==disabled;{title:**Failure!**}
    {description:**The antilink system is already enabled!**}
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