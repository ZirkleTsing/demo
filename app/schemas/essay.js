/**
 * Created by chang on 17-5-23.
 */
var mongoose = require('mongoose')

var EssaySchema = new mongoose.Schema({
    title: String,
    body: String
})

/*EssaySchema.pre('save', function(next) {
})*/

EssaySchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            .exec(cb)
    }
}

module.exports = EssaySchema