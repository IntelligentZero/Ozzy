module.exports.JoinedCommand = ({
name: "$systemChannelID",
code: `
$giveRole[$getServerVar[role];$userID]
$onlyIf[$getServerVar[autorole]==true;]
`})