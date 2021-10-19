module.exports.ChannelDeleteCommand = ({
    name: "$getServerVar[channel]",
    code: `
    $channelSendMessage[$getServerVar[channel];
        {title:***Channel Deleted!***]}
        {description:**Channel with {name} in {guildName} was successfully deleted.
        -Type: {type}
        -ID: {id}**}
        {color:#ff0000}]
    $onlyIf[$getServerVar[logs]==enabled;]
    `
    })