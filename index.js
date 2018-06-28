var SlackBot = require("slackbots");

const envKey = process.env.MONOBOT_TOKEN;

// create a bot
var bot = new SlackBot({
  token: envKey, // Add a bot https://my.slack.com/services/new/bot and put the token
  name: "monobot"
});

bot.on("start", function() {
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  var params = {
    icon_emoji: ":speak_no_evil:"
  };

  // define channel, where bot exist. You can adjust it there https://my.slack.com/services
  bot.postMessageToChannel("general", "uh! uh! uh!", params);

  // define existing username instead of 'user_name'
  bot.postMessageToUser("user_name", "uh! uh! uh!", params);

  // If you add a 'slackbot' property,
  // you will post to another user's slackbot channel instead of a direct message
  bot.postMessageToUser("user_name", "uh! uh! uh!", {
    slackbot: true,
    icon_emoji: ":speak_no_evil:"
  });

  // define private group instead of 'private_group', where bot exist
  bot.postMessageToGroup("private_group", "uh! uh! uh!", params);
});
