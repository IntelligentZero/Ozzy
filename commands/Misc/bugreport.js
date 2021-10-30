module.exports = ({
    name: "bugreport",
    description: "Report a bug in the bot.",
    aliases: [""],
    usage: "bugreport <bug>",
    code: `
    $title[**Successfully sent your report!**]
    $description[**Success! We are very sorry for the inconvenience!**]
    $footer[WARNING: Unreleated things will result in a blacklist.]
    $color[RANDOM]
    $channelSendMessage[822557486296334387;{title:**Bugreport!**}
    {description:$message[] | From: $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RED}]
    $globalCooldown[2h;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    $onlyIf[$message[1]!=;{title:**Not enough arguments!**}
    {description:**Please input a message!**}
    {color:RED}]
    `
})