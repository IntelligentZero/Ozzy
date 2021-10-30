module.exports.AwaitedCommand = ({
    name: "autorole",
    code: `$addField[Auto-Role;
        - enableautorole (Enables the autorole system.) | Usage: \`enableautorole\` 
        - disableautorole | (Disables the autorole system.) | Usage: \`disableautorole\` 
        - setautorole | (Sets the role which will be assigned when a member joins.) | Usage: \`setautorole <roleID>\`]
        $color[RANDOM]`
    })