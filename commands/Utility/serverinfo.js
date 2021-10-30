module.exports = ({
    name: "serverinfo",
    description: "Get information about a guild.",
    usage: "serverinfo",
    status: "disabled",
    error: "Disabled until further notice.",
    aliases: [""],
    code: `
   $title[**Guild Information!**]
   $addField[**Guild ID:**;$guildID;no]
   $addField[**Total Members?**;$membersCount]  
   $addField[**Features?**;$guildFeatures;no]   
   $addField[**Guild Boost Level:**;$guildBoostLevel]   
   $addField[**Total Channel Count:**;$channelCount[$guildID]]   
   $addField[**Guild Verification Level:**;$guildVerificationLvl]  
   $addField[**Name:**;$guildName]
   $color[RANDOM]
   $addTimestamp
   $channelSendMessage[817979707735408681;Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID]
   $globalCooldown[10s;You cant use this command for {time}]
   `
   });