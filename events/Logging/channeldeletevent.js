module.exports.ChannelDeleteCommand = ({
    name: "$getServerVar[channel]",
    code: `
        $title[Channel Deleted!]
        $description[Channel with {name} in {guildname} was successfully deleted.
        -Type: {type}
        -ID: {id}}
        $color[#ff0000]
    $onlyIf[$getServerVar[logs]==enabled;]
    `
    })