const { Schema, model, Types } = require('mongoose');

const requestSchema = Schema({
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "accepted", "rejected"],
    },
    sender: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiver: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = model('Request', requestSchema);