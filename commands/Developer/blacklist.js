module.exports = ({
    name: "blacklist",
    aliases: ["bl"],
    code: `
    $blackList[$toLowercase[$message[1]];$message[3];$toLowercase[$message[2]]]
   
    $replaceText[$replaceText[$checkCondition[$userExists[$message[3]]==true];true;**$username[$message[3]]#$discriminator[$message[3]]**];false;The server, **$message[3]**] has been **$replaceText[$replaceText[$toLowercase[$toLowercase[$message[1]]];add;blacklisted from using the bot];remove;whitelisted and can now use the bot!]**
   
    $onlyIf[$isNumber[$message[3]]==true;**Invalid $message[2]ID**]
    $onlyIf[$message[3]!=;**Supply a $message[2]ID**]
    $onlyIfMessageContains[user;server;{title:Invalid usage!} {description:$getServerVar[prefix]blacklist <add> <user> <userID>
   $getServerVar[prefix]blacklist <add> <server> <serverID>
   $getServerVar[prefix]blacklist <remove> <user> <userID>
   $getServerVar[prefix]blacklist <remove> <server> <serverID>} {color:RED}]
   
    $onlyIfMessageContains[add;remove;{title:Invalid usage!} {description:$getServerVar[prefix]blacklist <add> <user> <userID>
   $getServerVar[prefix]blacklist <add> <server> <serverID>
   $getServerVar[prefix]blacklist <remove> <user> <userID>
   $getServerVar[prefix]blacklist <remove> <server> <serverID>} {color:RED}]
   $onlyForUsers[750440594056151301;{title:**No.**}
    {description:**Only the bot developer ($username[750440594056151301]#$discriminator[750440594056151301]) can use this command.**}
    {color:RED}]
    `
    })