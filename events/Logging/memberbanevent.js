module.exports.BanCommand = ({
    name: "$getServerVar[channel]",
    code: `
    $title[User Banned!]
    $description[$tag was successfully banned from $guildName!]
    $color[#ff0000]
    $onlyIf[$getServerVar[logs]==enabled;]
    `
    })