module.exports.RoleCreateCommand = ({
    name: "$getServerVar[channel]",
    code: `
        $title[Role Created!]
        $description[A new role was created!
            ID:  {id}
            Name: {name}
            Mention: {mention}
            Hoisted? {ishoisted}
            Mentionable? {ismentionable}
            Color: {color}
            Position: {position}
            Created at: {created}]
        $color[#0000ff]
        $onlyIf[$getServerVar[logs]==enabled;]
    `
    })