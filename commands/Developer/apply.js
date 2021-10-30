module.exports = ({
    name: "apply",
    code: `
$reboot
$setVar[version;$message[]]
$replyIn[5s]
$onlyForUsers[750440594056151301;{title:**No.**}
        {description:**Only the bot developer ($username[750440594056151301]#$discriminator[750440594056151301]) can use this command.**}
        {color:RED}]
`
})