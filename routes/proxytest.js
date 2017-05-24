/**
 * Created by chang on 17-5-17.
 */
var express = require('express')
var essayModel = require('../app/models/essay')
var router = express.Router()
var mongoose = require('mongoose')
var Essays = require('../app/controllers/essays')

router.get('/essay', Essays.essays)
module.exports = router