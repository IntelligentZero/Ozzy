module.exports.EmojiCreateCommand = ({
    name: "$getServerVar[channel]",
    code: `
    $channelSendMessage[$getServerVar[channel];
        {title:***Emoji Created!***}
        {description:**New emoji with {name} was created in {guildname}.
        -Emoji image url: {emoji}
        -Animated? {isanimated}
        -ID: {id}
        -Creation Date: {created}
        **}
        {color:#0000ff}]
        $onlyIf[$getServerVar[logs]==enabled;]
    `
    })