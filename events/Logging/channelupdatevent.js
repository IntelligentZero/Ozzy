module.exports.ChannelUpdateCommand = ({
    name: "$getServerVar[channel]",
    code: `
    
        $title[Channel settings updated!]
        $description[
            Channel Updated!
            -Old name: {oldname}
            -New name: {newname}
            -Old topic: {oldtopic} 
            -New topic: {newtopic}
            -Old type: {oldtype}
            -New type: {newtype}
            -Old position: {oldposition}
            -New position: {newposition}
            ]
        $color[#ffa500]
    $onlyIf[$getServerVar[logs]==enabled;]
    `
    })