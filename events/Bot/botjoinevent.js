module.exports.BotJoinCommand = ({
    name: "$systemChannelID",
    code: `
    $title[**Thank you for inviting me!**]
    $description[**Thanks for inviting me!
    My prefix is $getServerVar[prefix]
    My help page is $getServerVar[prefix]help
    You can also ping me for my prefix incase you forget it!**]
    $color[RANDOM]
    $channelSendMessage[893505138612895774;
    {title:**Joined new guild!**}
{description:**ID - $guildID
Name: $guildName
Member Count: $membersCount
Owner ID: $ownerID
Owner username: $username[$ownerID]#$discriminator[$ownerID]**}
{color:RANDOM}]
`})