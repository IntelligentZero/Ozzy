module.exports.AwaitedCommand = ({
    name: "misc",
    code: `$addField[Misc;
        - ping | (Shows information about the connection of the bot to Discord's API.) | Usage: \`ping\`,
        - help | (Shows information about the bot's commands.) | Usage: \`help\` | Aliases: \`cmds\`,
        - privacypolicy | (Shows the privacy policy of the bot.) | Usage: \`privacypolicy\` | Aliases: \`data\`,
        - tos | (Shows terms of service of the bot.) | Usage: \`tos\` | Aliases: \`rules\`,
        - stats | (Shows statistical information about the bot.) | Usage: \`stats\` | Aliases: \`botinfo\`,
        - setprefix | (Set a custom server prefix.) | Usage: \`setprefix <newprefix>\` | Aliases: \`changeprefix\`,
        - feedback | (Give feedback to the developer.) | Usage: \`feedback <feedback>\`,
        - bugreport | (Notify the developer about a bug.) | Usage: \`bugreport <bug>\`,
        - invite | (Generate invite links for the bot's top.gg vote link, support server and invite link for the bot. | Usage: \`invite\`]
        $color[RANDOM]`
    })