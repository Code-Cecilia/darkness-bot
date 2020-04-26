module.exports = client => {
  const config = require("../config.json");
  client.user.setActivity(`slow dancing in the dark || ${config.PREFIX}`, {
    url: "https://www.twitch.tv/yuichiro__",
    type: "STREAMING"
  });
  console.log(`Activity set to Slow dancing in the d a r k`);
  console.log(
    `Bot up and running with ${client.ws.ping}ms of latency and node version ${process.version}`
  );
};
