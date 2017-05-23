/**
 * Created by chang on 17-5-23.
 */
var mongoose = require('mongoose')
var EssaySchema = require('../schemas/essay')
var Essay = mongoose.model('essay', EssaySchema)

module.exports = Essay
