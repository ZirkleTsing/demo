/**
 * Created by chang on 17-5-17.
 */
var express = require('express')
var essayModel = require('../models/essay')
var router = express.Router()
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/essay')

router.get('/test', function(req, res) {
    console.log('/api/test')
    res.json({
        title: 'testProxy',
        name: 'chang'
    })
})

router.get('/essay', function(req, res) {
/*    console.log('send get request to node')*/
/*    var _essay = new essayModel({
        title: 'title_from_db',
        body: 'essay_from_db'
    })
    _essay.save(function(err, essay) {
        if(err) console.log(err)
        res.redirect('/')
    })*/
    essayModel.fetch(function(err, essays){
        res.json(essays)
        console.log(essays)
    })

})

module.exports = router