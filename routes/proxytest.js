/**
 * Created by chang on 17-5-17.
 */
var express = require('express')
var essayModel = require('../app/models/essay')
var router = express.Router()
var mongoose = require('mongoose')
var Essays = require('../app/controllers/essays')

router.get('/essay', Essays.essays)
router.get('/essay/detail', Essays.essaysDetail)
router.get('/essay/detail/new', Essays.essayNew)
router.post('/essay/detail/new', Essays.essayCreate)
module.exports = router