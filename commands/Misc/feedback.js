module.exports = ({
    name: "feedback",
    description: "Give feedback about the bot.",
    aliases: [""],
    usage: "feedback <feedback>",
    code: `
    $title[**Successfully sent your feedback!**]
    $description[**Success! We thank you for your feedback!**]
    $footer[WARNING: Unreleated things will result in a blacklist.]
    $color[RANDOM]
    $channelSendMessage[896396778662920272;{title:**Feedback!**}
        {description:$message[] | From: $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RANDOM}]
    $globalCooldown[24h;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    $onlyIf[$message[1]!=;{title:**Not enough arguments!**}
    {description:**Please input a message!**}
    {color:RED}]
    `
})