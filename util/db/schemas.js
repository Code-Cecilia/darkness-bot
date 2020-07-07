const { Schema } = require("mongoose");

module.exports = {
    GuildSchema: new Schema ({
        id_: String,
        prefix: {
            default: "?",
            type: String
        }
    }),
    UserSchema: new Schema ({
        id_: String,
        test: {
            default: "tested",
            type: String
        }
    })
}