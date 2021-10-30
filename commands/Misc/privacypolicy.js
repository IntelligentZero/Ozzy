module.exports = ({
    name: "privacypolicy",
    description: "Shows the privacy policy of the bot.",
    aliases: ["data"],
    usage: "privacypolicy",
    code: `
    $title[**$client[name]'s privacy policy.**]
    $description[**Read the following to know what we do with your data.**]
    $addField[What do we do with your data?;**
    We use the data for operations of the commands. All data is used only for the bot, and we do not collect data that is not needed for the bot to operate.
    **;yes]
    $addField[What is used?;**
        User ID's, Server ID's, Message ID's, the timestamp when you ran the command, Username and discriminator, When the bot joined the server, Amount of members in the server.**;yes]
    $addField[How do I delete my data?;**
        Sadly with the database we use, there's no way to delete it. The only way is kicking the bot from your server.**;yes]
    $addField[Can the developer read the data?;**
        No. The developer can NOT read the data.
        **;yes]
        $color[RANDOM]
        $channelSendMessage[817979707735408681;{title:**Command Executed!**}
            {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
            {color:RANDOM}]
        $globalCooldown[10s;{title:**You are on a cooldown!**}
            {description:**Please wait {time} before using this command again. Command: $cmd**}
            {footer:Spamming will result in a blacklist.}
            {color:RED}]
    `
})