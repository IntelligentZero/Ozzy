module.exports = ({
    name: "help",
    description: "Shows information about the bot's commands.",
    aliases: ["cmds"],
    usage: "help",
    code: `
    $title[**$client[name]'s help page.**]
    $description[**Server prefix is \`$getServerVar[prefix]\`**]
    $addField[Misc;
    - ping | (Shows information about the connection of the bot to Discord's API.) | Usage: \`ping\`,
    - help | (Shows information about the bot's commands.) | Usage: \`help\` | Aliases: \`cmds\`,
    - privacypolicy | (Shows the privacy policy of the bot.) | Usage: \`privacypolicy\` | Aliases: \`data\`,
    - tos | (Shows terms of service of the bot.) | Usage: \`tos\` | Aliases: \`rules\`,
    - stats | (Shows statistical information about the bot.) | Usage: \`stats\` | Aliases: \`botinfo\`,
    - setprefix | (Set a custom server prefix.) | Usage: \`setprefix <newprefix>\` | Aliases: \`changeprefix\`,
    - feedback | (Give feedback to the developer.) | Usage: \`feedback <feedback>\`,
    - bugreport | (Notify the developer about a bug.) | Usage: \`bugreport <bug>\`,
    - invite | (Generate invite links for the bot's top.gg vote link, support server and invite link for the bot. | Usage: \`invite\`]
    $addField[Utility;
        - config | (Get the server configuration.) | Usage: \`config\`
        - userinfo | (Get user information about someone.) | Usage: \`userinfo <@user>\` (Currently Disabled)
        - serverinfo | (Get guild information about a server.) | Usage: \`serverinfo\` (Currently Disabled)
        - massrole | (Massrole roles in a server.) | Usage: \`massrole <@role>\`]
    $addField[Antilink;
        - enableal (Enables the antilink system.) | Usage: \`enableal\` | Aliases: \`enableantilink\`
        - disableal | (Disables the antilink system.) | Usage: \`disableal\` | Aliases: \`disableantilink\`]
    $addField[Moderation;
        - ban | (Bans a member from the guild.) | Usage: \`ban <@member> <reason>\`
        - unban | (Unbans a member from the guild.) | Usage: \`unban <id> <reason>\`
        - tempban | (Temporarily ban a member from the guild.) | Usage: \`tempban <user> <time> <reason>\`
        - kick | (Kick a member from the server.) | Usage: \`kick <@user> <reason>\`]
    $addField[Logging;
        - enablelogs (Enables the logging system.) | Usage: \`enablelogs\` | Aliases: \`enableloggingsystem\`
        - disablelogs | (Disables the logging system.) | Usage: \`disablelogs\` | Aliases: \`disableloggingsystem\`
        - setlogschannel | (Sets the channel where logs will be sent to.) | Usage: \`setlogschannel <channelid>\` | Aliases: \`logschannel\`]
    $addField[Auto-Role;
        - enableautorole (Enables the autorole system.) | Usage: \`enableautorole\` 
        - disableautorole | (Disables the autorole system.) | Usage: \`disableautorole\` 
        - setautorole | (Sets the role which will be assigned when a member joins.) | Usage: \`setautorole <roleID>\`]
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