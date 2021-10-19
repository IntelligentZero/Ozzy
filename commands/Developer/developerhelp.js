module.exports = ({
    name: "devhelp",
    code: `
$addField[Developer;
    - eval | (Evaluates code given from the developer.) | Usage: \`eval <code>\` | Aliases: \`exec\`
    - blacklist | (Blacklist a user or server from using the bot.) | Usage: \`blacklist add <user>, <server>\` | Aliases \`bl\`]
$color[RANDOM]
$onlyForUsers[750440594056151301;{title:**No.**}
    {description:**Only the bot developer ($username[750440594056151301]#$discriminator[750440594056151301]) can use this command.**}
    {color:RED}]
    `
})