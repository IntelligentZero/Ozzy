module.exports = ({
    name: 'invite',
    description: "Invite the bot to your server, this also includes the support server links!",
    aliases: [''],
    usage: "invite",
    code: `
    $title[**Thank you!**]
    $addField[Bot Invite link;{hyper:Invite!:$getBotInvite};no]
    $addField[Support Server Link;{hyper:Join!:https://discord.gg/QAHqxMuxus};no]
    $addField[Vote Link;{hyper:Vote!:https://top.gg/bot/776687782239666188/vote}]
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