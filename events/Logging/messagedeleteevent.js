module.exports.MessageDeleteCommand = ({
    name: "$getServerVar[channel]",
    code: `
        $title[Message Deleted!]
        $description[<@$authorID> has deleted a message!
            Message contained: $message[]]
        $color[#ff0000]
        $onlyIf[$getServerVar[logs]==enabled;]
    `
        })