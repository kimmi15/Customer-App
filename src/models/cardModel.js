const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

let cardSchema = new mongoose.Schema({
    cardNumber: {
        type: Number,
        required: true,
        unique:true,
    },
    cardType: {
        type: String,
        required: true,
        enum:["REGULAR","SPECIAL"],
        default:"REGULAR"
    },
    customerName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    vision: {
        type: String
    },
    customerId: {
        type: ObjectId,
        ref: "Customer",
        unique:true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Card", cardSchema)