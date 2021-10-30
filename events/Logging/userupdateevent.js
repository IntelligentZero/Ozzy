module.exports.UserUpdateCommand = ({
    name: "updateEvent",
    description: "User update event for logs",
    code:`
        $title[User information updated!]
        $description[
            Old Username - {oldname}
            New Username - {newname}
            Old discriminator - {olddiscrim}
            New discriminator - {newdiscrim}
            Old avatar - {oldavatar}
            New avatar - {newavatar}]
        $color[#0000ff]
        $onlyIf[$checkCondition[{olddiscrim}!={newdiscrim}]==true;]
        $onlyIf[$checkCondition[{oldavatar}!={newavatar}]==true;]
        $onlyIf[$getServerVar[logs]==enabled;]
        `
})