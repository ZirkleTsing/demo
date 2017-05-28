/**
 * Created by chang on 17-5-28.
 */
let mongoose = require('mongoose')

let EssayNewPostSchema = new mongoose.Schema({
    data: String
})

EssayNewPostSchema.statics = {
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

module.exports = EssayNewPostSchema