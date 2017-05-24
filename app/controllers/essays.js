/**
 * Created by chang on 17-5-17.
 */
let express = require('express')
let EssayModel = require('../models/essay')
let EssayDetailModel = require('../models/essayDetail')

// app get essays
exports.essays = function(req, res) {
    EssayModel.fetch(function(err, essays) {
        res.json(essays)
/*        console.log('get from essays')
        console.log(essays)*/
    })
}

exports.essaysDetail = function(req, res) {
   /* let detail = new EssayDetailModel({
        body: 'testtesttesttesttesttesttest',
        flag: 123
    })
    detail.save(function(err, detail) {
        if(err) console.log(err)
        console.log(detail)
    })*/
    /*    let _flag = req.body.flag
    EssayDetailModel.findById(_flag, function(err, results) {
/!*        console.log(123)
        console.log(results)*!/
    })*/

/*    EssayDetailModel.findById(123, function(err, results) {
        if(err) console.log(err)
        let result = results[0]
        res.json(result)
    })*/
    EssayDetailModel.fetch(function(err, results) {
        res.json(results[0])
    })
}

