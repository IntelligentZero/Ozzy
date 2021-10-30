module.exports.AwaitedCommand = ({
    name: "logging",
    code: `$addField[Logging;
        - enablelogs (Enables the logging system.) | Usage: \`enablelogs\` | Aliases: \`enableloggingsystem\`
        - disablelogs | (Disables the logging system.) | Usage: \`disablelogs\` | Aliases: \`disableloggingsystem\`
        - setlogschannel | (Sets the channel where logs will be sent to.) | Usage: \`setlogschannel <channelid>\` | Aliases: \`logschannel\`]
        $color[RANDOM]`
    })