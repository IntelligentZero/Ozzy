module.exports.MessageDeleteCommand = ({
    name: "$getServerVar[channel]",
    code: `
    $channelSendMessage[$getServerVar[channel];
        {title:***Message Deleted!***}
        {description:**<@$authorID> has deleted a message!
            Message contained: $message[]**}
        {color:#ff0000}]
        $onlyIf[$getServerVar[logs]==enabled;]
    `
        })