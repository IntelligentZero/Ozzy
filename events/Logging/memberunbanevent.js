module.exports.UnbanCommand = ({
    name: "$getServerVar[channel]",
    code: `
        $title[User unbanned!]
        $description[$tag[$authorID] was unbanned from $guildName.]
        $color[#0000ff]
        $onlyIf[$getServerVar[logs]==enabled;]
        `
        })