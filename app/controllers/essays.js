/**
 * Created by chang on 17-5-17.
 */
let express = require('express')
let EssayModel = require('../models/essay')
let EssayDetailModel = require('../models/essayDetail')
let EssayNewPost = require('../models/newEssay')
let marked = require('marked')
let highlight = require('highlight.js')
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});


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

exports.essayNew = function(req, res) {
    EssayNewPost.fetch(function(err, result) {
        if(err) console.log(err)
        /* res.json(result[0]) */
        /*let send = result[0].data*/
        let target = result[1]
        res.json(target)

    })
}
exports.essayCreate = function(req, res) {
/*    console.log(req.body.text)*/
    let text = req.body.text
    let title = req.body.title
    let targetObj = {
        title: title,
        data: text
    }
    EssayNewPost.create(targetObj).then(r => {
        console.log('添加成功！')
        res.json({
            code: 200,
            data: r
        }).catch(r => {
            console.log(r)
            res.json({
                code: 500,
                message: '添加失败！'
            })
        })
    })

    /*EssayNewPost.create(req.body)*/
}
