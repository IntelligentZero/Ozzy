module.exports = ({
    name: "disableal",
    aliases: "disableantilink",
    cat: "ANTILINK",
   usage: "disableal",
    code: `
    $title[**Successfully disabled antilink!**]
    $description[**Success! Antilink status is now \`$getServerVar[antilink]\`. Set by: $username[$authorID]#$discriminator[$authorID]**]
    $color[RANDOM]
   $setServerVar[antilink;disabled]
    $onlyIf[$getServerVar[antilink]==enabled;{title:**Failure!**
       {description:**The antilink system is already disabled!**}
   {color:RED}]
    $onlyPerms[manageserver;{title:**Invalid Permissions!**}
        {description:You need \`MANAGE_SERVER\` permissions to execute this command.}
        {color:RED}]
    $channelSendMessage[817979707735408681;{title:**Command Executed!**}
        {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RANDOM}]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    `
})