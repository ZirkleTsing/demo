/**
 * Created by chang on 17-5-23.
 */
var mongoose = require('mongoose')
var EssaySchema = require('../schemas/essay')

//　引入文章页Schema
var Essay = mongoose.model('essay', EssaySchema)

module.exports = Essay
