module.exports = ({
    name: "tos",
    description: "Shows terms of service of the bot.",
    aliases: ["rules"],
    usage: "tos",
    code: `
    $title[**$client[name]'s terms of service.**]
    $description[**Follow these terms in order to not get yourself or the your server blacklisted.**]
    $addField[No. 1;**
    Creating dedicated servers to either spam the bot or attempt to damage other users experience in any way, The server and anyone involved will get blacklisted.**;yes]
    $addField[No. 2;**
        Exploiting bugs to your own benefit will result in a permanent blacklist.**;yes]
    $addField[No. 3;**
        Using the bot to break the discord ToS in any way will result in a permanent blacklist.**;yes]
    $addField[No. 4;**
        Copying the bot in any way will result in a permanent blacklist.
        **;yes]
    $addField[No. 5;**
        Common Sense. Do not try to find loopholes in the rules.
        **;yes]
    $addField[No. 6;**
        A blacklist decision is final. Although, in rare circumstances, You could get unblacklisted.
        **;yes]
    $addField[No. 7;**
        Arguing with a bot staff over someone getting blacklisted will just result with YOU getting blacklisted.
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