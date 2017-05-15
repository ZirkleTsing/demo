/**
 * Created by chang on 17-5-15.
 */
var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
    res.send(`the name is ${req.params.name}`)
});

module.exports = router;