module.exports.GuildUpdateCommand = ({
    name: "$getServerVar[channel]",
    code: `
    $channelSendMessage[$getServerVar[channel];
        {title:***Guild Update!***}
        {description:**Guild Updated!
            Old guild name: {oldname} - New value: {newname}
            Old guild icon: {oldicon} - New value: {newicon}
            Old guild owner: {oldowner} - New value: {newowner}
            Old guild afk channel: {oldafkchannel} - New value: {newafkchannel}
            Old guild afk timeout: {oldtimeout} - New value: {newtimeout}
            Old guild updates channel: {oldupdateschannel} - New value: {newupdateschannel}
            Old guild rules channel: {oldruleschannel} - New value: {newruleschannel}
            Old guild system channel: {oldsystemchannel} - New value: {newsystemchannel}
            Old guild description: {olddescription} - New value: {newdescription}
            Old guild notification settings: {oldnotifications} - New value: {newnotifications}
            Old guild explicit filter settings: {oldexplicitfilter} - New value: {newexplicitfilter}
            Old guild verification level: {oldverificationlvl} - New value: {newverificationlvl}
            Old guild mfa level: {oldmfa}  - New value: {newmfa}
            Old preferred locale: {oldlocale}  - New value: {newlocale}
            Old partnered value of the guild: {oldpartnered} - New value: {newpartnered}
            Old verified value of the guild: {oldverified} - New value: {newverified}
            Old vanity of the guild: {oldvanity} - New value: {newvanity}**}
        {color:#ffa500}]
    $onlyIf[$getServerVar[logs]==enabled;]
    `
    })