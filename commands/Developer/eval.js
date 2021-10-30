module.exports = ({
    name: "eval",
    description: "Evaluate code inputted from the developer.",
    aliases: ["exec"],
    usage: "eval <code>",
    code: `

    $title[**Evaluated!**]
    $addField[:outbox_tray: Output:;\`\`\`$eval[$message[]]\`\`\`]
    $addField[:inbox_tray: Input:;\`\`\`$message[]\`\`\`]
    $color[RANDOM]
    $argsCheck[>1;**Please enter code to evaluate!**]
    $onlyForUsers[750440594056151301;{title:**No.**}
        {description:**Only the bot developer ($username[750440594056151301]#$discriminator[750440594056151301]) can use this command.**}
        {color:RED}]
    `
})