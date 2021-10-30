module.exports.RoleDeleteCommand = ({
    name: "$getServerVar[channel]",
    code: `
        $title[Role Deleted!]
        $description[A role with the following information was deleted:
            ID:  {id}
            Name: {name}
            Mention: {mention}
            Hoisted? {ishoisted}
            Mentionable? {ismentionable}
            Color: {color}
            Position: {position}]
        $color[#ff0000]]
        $onlyIf[$getServerVar[logs]==enabled;]
        `
        })