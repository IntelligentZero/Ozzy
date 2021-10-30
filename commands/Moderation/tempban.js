module.exports = {
    name: "tempban",
    code: `
   $channelSendMessage[$channelID[];{title:__Tempban__}{description:**<@$mentioned[1]> is now unbanned!**}{color:00faff}{footer:$serverName[]}{thumbnail:$userAvatar[$mentioned[1]]}]
   
   $unban[$mentioned[1]]
   
   $replyIn[$splitText[1]]
   
   $channelSendMessage[$channelID[];{thumbnail:$userAvatar[$mentioned[1]]}{title:__Tempban__}{description:**Banned: <@$mentioned[1]>
   By: <@$authorID>
   Reason: \`$replaceText[$replaceText[$checkCondition[$splitText[2]==];true;no reason];false;$splitText[2]]\`
   Time: $splitText[1]**}{color:00faff}{footer:$serverName[]}]
   
   $ban[$mentioned[1];$splitText[2]]
   $channelSendMessage[817979707735408681;{title:**Command Executed!**}
    {description:Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID}
    {color:RANDOM}]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
   $onlyPerms[ban;{title::x: Missing permissions!}{color:d0321d}{description:**You're missing __Ban Members__ permission!**}]
   
   $onlyBotPerms[ban;{title::x: Missing permissions!}{color:d0321d}{description:**Im missing __Ban Members__ permission**!}]
   
   $onlyIf[$splitText[1]!=;{title:❌ Missing arguments!}{description:**Usage: \`$getServerVar[prefix]tempban <@user> <time>: <reason>\`**}{color:d0321d}]
   
   $onlyIf[$mentioned[1]!=;{title:❌ Missing arguments!}{description:**Usage: \`$getServerVar[prefix]tempban <@user> <time>: <reason>\`**}{color:d0321d}]
   
   $textSplit[$noMentionMessage[];:]
   `}