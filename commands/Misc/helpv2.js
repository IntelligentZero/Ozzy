module.exports = ({
    name: "testhelp",
    description: "V2 of the help command.",
    code: `
$awaitReactions[<:stafftools:314348604095594498>,<:rich_presence:658538493521166336>,<:xmark:314349398824058880>,<:settings:585767366743293952>,<:channel_locked:585783907350478848>,<:role:808826577785716756>;$userID;30s;moderation;misc;antilink;utility;logging;autorole;{description:Help command timed out.}] 
    $title[Ozzy's Help Page!]
    $description[**Server prefix is \`$getServerVar[prefix]\`**]
    $addField[Tutorial;
        <:stafftools:314348604095594498> - Moderation Commands
        <:rich_presence:658538493521166336> - Misc Commands
        <:xmark:314349398824058880> - Antilink Commands
        <:settings:585767366743293952> - Utility Commands
        <:channel_locked:585783907350478848> - Logging Commands
        <:role:808826577785716756> - Autorole Commands
        ]
    `
})

//module.exports = ({
    name: "testhelp",
    description: "V2 of the help command.",
    code: `
$awaitReactions[314348604095594498,658538493521166336,314349398824058880,585767366743293952,585783907350478848,808826577785716756;$userID;30s;moderation;misc;antilink;utility;logging;autorole;{description:Help command timed out.}] 
    $title[Ozzy's Help Page!]
    $description[**Server prefix is \`$getServerVar[prefix]\`**]
    $addField[Tutorial;
        <:stafftools:314348604095594498> - Moderation Commands
        <:rich_presence:658538493521166336> - Misc Commands
        <:xmark:314349398824058880> - Antilink Commands
        <:settings:585767366743293952> - Utility Commands
        <:channel_locked:585783907350478848> - Logging Commands
        <:role:808826577785716756> - Autorole Commands
        ]
    `
})