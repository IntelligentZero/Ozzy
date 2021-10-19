module.exports.JoinedCommand = ({
name: "$systemChannelID",
code: `
$giveRole[$authorID;$getServerVar[role]]
$onlyIf[$getServerVar[autorole]==true;]
`})