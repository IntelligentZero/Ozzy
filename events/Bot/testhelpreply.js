module.exports.SpaceCommand = ({
    name: "testhelpreply",
    code: `
$addMessageReactions[$channelID;$lastMessageID[776687782239666188];314348604095594498;658538493521166336;314349398824058880;585767366743293952;585783907350478848;808826577785716756]
    $replyIn[2s]
$onlyIfMessageContains[$getServerVar[prefix]testhelp;]
    `
})