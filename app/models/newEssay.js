/**
 * Created by chang on 17-5-28.
 */
var mongoose = require('mongoose')
var EssayNewPostSchema = require('../schemas/newEssay')

//　引入文章页Schema
var EssayNewPost = mongoose.model('essaynew', EssayNewPostSchema)

module.exports = EssayNewPost