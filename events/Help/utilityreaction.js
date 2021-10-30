module.exports.AwaitedCommand = ({
    name: "moderation",
    code: `$addField[Utility;
        - config | (Get the server configuration.) | Usage: \`config\`
        - userinfo | (Get user information about someone.) | Usage: \`userinfo <@user>\` (Currently Disabled)
        - serverinfo | (Get guild information about a server.) | Usage: \`serverinfo\` (Currently Disabled)
        - massrole | (Massrole roles in a server.) | Usage: \`massrole <@role>\`]
        $color[RANDOM]`
    })