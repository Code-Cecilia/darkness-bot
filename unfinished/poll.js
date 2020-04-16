module.exports.run = async (client, message) => {
if (message.content.startsWith("Poll:")) {
    try {
      await message.react("👍");
      await message.react("👎");
      await message.react("😐");
    } catch (error) {
      console.error("One of the emojis failed to react.");
    }
  }
};
