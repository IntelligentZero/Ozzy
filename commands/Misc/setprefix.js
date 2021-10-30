module.exports = ({
    name: "setprefix",
    aliases: ['changeprefix'],
    description: "Set the server prefix!",
    usage: "setprefix",
    code: `
    $title[**Successfully set server prefix!**]
    $setServerVar[prefix;$message[]]
    $description[**Server prefix is now \`$message[]\`! Set by: $username[$authorID]#$discriminator[$authorID]**]
    $color[RANDOM]
    $disableMentions[]
    $onlyIf[$message[1]!=;{title:**Incorrect Arguments!**}
    {description:**Please input a prefix.**}
    {color:RED}]
    $onlyPerms[manageserver;{title:**Invalid Permissions!**}
    {description:**You need the \`MANAGE_SERVER\` permission to execute this command.**}
    {color:RED}]
    `
})