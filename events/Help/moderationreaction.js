module.exports.AwaitedCommand = ({
    name: "moderation",
    code: `$addField[Moderation;
        - ban | (Bans a member from the guild.) | Usage: \`ban <@member> <reason>\`
        - unban | (Unbans a member from the guild.) | Usage: \`unban <id> <reason>\`
        - tempban | (Temporarily ban a member from the guild.) | Usage: \`tempban <user> <time> <reason>\`
        - kick | (Kick a member from the server.) | Usage: \`kick <@user> <reason>\`]
        $color[RANDOM]`
    })