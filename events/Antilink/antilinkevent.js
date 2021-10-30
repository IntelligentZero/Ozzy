module.exports.SpaceCommand = ({
    name: "antilinksys",
    code: `
      $onlyIf[$getServerVar[antilink]==disabled;{title:**Message Deleted!**}
      {description:**You cannot send links in this server!**}
     {footer:Antilink system is enabled!}
    {color:RED}]
      $deletecommand
      $onlyIf[$getServerVar[antilink]==enabled;]
      $onlyIfMessageContains[http;]
    `
    })