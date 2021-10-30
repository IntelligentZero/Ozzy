module.exports.EmojiDeleteCommand = ({
    name: "$getServerVar[channel]",
    code: `
        $title[Emoji Deleted!]
        $description[Emoji with {name} was deleted in {guildname}.
        -Emoji image url: {emoji}
        -Animated? {isanimated}
        -ID: {id}
        ]
        $color[#ff0000]
        $onlyIf[$getServerVar[logs]==enabled;]
        `
        })