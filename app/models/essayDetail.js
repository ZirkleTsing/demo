/**
 * Created by chang on 17-5-24.
 */
var mongoose = require('mongoose')
var EssayDetailSchema = require('../schemas/essayDetail')

//　引入文章页Schema
var EssayDetail = mongoose.model('essayDetail', EssayDetailSchema)

module.exports = EssayDetail