const mongoose = require('mongoose');

const recordSchema = mongoose.Schema(
    {
        slackUsername: {
            type: String
        },
        backend: {
            type: Boolean
        },
        age: {
            type: Number
        },
        bio:{
            type: String
        },
    }
);

module.exports = mongoose.model("Record", recordSchema)