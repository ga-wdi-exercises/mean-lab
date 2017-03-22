var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/icook")

mongoose.Promise = global.Promise

module.exports = mongoose
