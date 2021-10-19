module.exports = ({
    name: "userinfo",
    description: "Get the user information about a person",
    usage: "userinfo <@user>",
    status: "disabled",
    error: "Disabled until further notice.",
    aliases: [""],
    code: `
   $title[**User Information!**]
   $addField[**Avatar:**;{hyper:Download:$userAvatar[$mentioned[1;yes]]}]  
   $addField[**Boosting** **$guildName**?;$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;Yes];false;No]
   $addField[**Platform?**; $replaceText[$replaceText[$replaceText[$platform[$mentioned[1]];mobile; 📱 mobile];web; 💻 web];desktop; 🖥️ desktop]]
   $addField[**Bot?**;$replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;No];true;Yes];no]
   $addField[**User badges:**;$replaceText[$replaceText[$checkCondition[$getUserBadges[$mentioned[1;yes]]==];true;None];false;$getUserBadges[$mentioned[1;yes]]]]
   $addField[**User roles:**;$memberRoles[$mentioned[1;yes]]]
   $addField[**Account created:**;$creationDate[$mentioned[1;yes]]]
   $addField[**Server nickname:**;<@$mentioned[1;yes]>]
   $addField[**Discord tag:**;$tag[$mentioned[1]]]
   $color[RANDOM]
   $thumbnail[$userAvatar[$mentioned[1;yes];png;true;512]]
   $addTimestamp
   $channelSendMessage[817979707735408681;Executed \`$cmd\` command from $guildName | Username = $username[$authorID] | User ID = $authorID | Guild ID = $guildID]
   $globalCooldown[10s;You cant use this command for {time}]
   `
   });