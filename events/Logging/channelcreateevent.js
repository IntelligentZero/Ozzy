module.exports.ChannelCreateCommand = ({
    name: "$getServerVar[channel]",
    code: `
    $channelSendMessage[$getServerVar[channel];
        {title:***New Channel Created!***}
        {description:**New channel with {name} in {guildName} was successfully created.
        -Type: {type}
        -ID: {id}
        -Creation Date: {created}**}
        {color:#0000ff}]
    $onlyIf[$getServerVar[logs]==enabled;]
    `
    })