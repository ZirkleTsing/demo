/**
 * Created by chang on 17-5-15.
 */
var express = require('express')
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {
        title: "小狗主页"
    });
})

module.exports = router