module.exports = ({
    name: "balance",
    description: "Shows balance of the user who ran the command. Utilises the economy system.",
    aliases: ['bal'],
    usage: "balance",
    code:
    `
    $title[**🧾Financial information!**]
    $addField[📊 Net Worth;$sum[$getVar[money;$authorID];$getVar[bank;$authorID]];no]
    $addField[🏦 Bank;$getVar[bank;$authorID];no]
    $addField[💰 Money;$getVar[money;$authorID];no]
    $color[RANDOM]
    $globalCooldown[10s;{title:**You are on a cooldown!**}
        {description:**Please wait {time} before using this command again. Command: $cmd**}
        {footer:Spamming will result in a blacklist.}
        {color:RED}]
    `
})