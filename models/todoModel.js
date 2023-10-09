const mongoose = require("mongoose")

const Todo = new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    taskname: {type: String, required: true},
    status: {type:String, default: "pending"},
    tag: {type: String}
}, {timestamps: true})

module.exports = mongoose.model("Todo", Todo);