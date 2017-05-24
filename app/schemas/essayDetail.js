/**
 * Created by chang on 17-5-24.
 */
let mongoose = require('mongoose')

let EssayDetailSchema = new mongoose.Schema({
    body: String,
    flag: Number
})

/*EssaySchema.pre('save', function(next) {
 })*/

EssayDetailSchema.statics = {
    fetch: function(cb) {
        return this
            .find({})
            .exec(cb)
    },
    findById(id, cb) {
        return this
            .find({id: id})
            .exec(cb)
    }
}

module.exports = EssayDetailSchema