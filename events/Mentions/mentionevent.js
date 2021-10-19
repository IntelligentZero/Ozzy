module.exports.SpaceCommand = ({
    name: "pingForPrefix",
    code: `
    $title[**Pong!**]
    $description[**Prefix:  \`$getServerVar[prefix]\`
    Set a custom prefix with:  \`$getServerVar[prefix]\`setprefix <prefix>**]
    $color[BLUE]
      $onlyIf[$message[2]==;]
      $onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
    `
    })