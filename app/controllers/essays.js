/**
 * Created by chang on 17-5-17.
 */
var express = require('express')
var essayModel = require('../models/essay')

// app get essays
exports.essays = function(req, res) {
                    essayModel.fetch(function(err, essays) {
                        res.json(essays)
                        console.log(essays)
                    })
                 }
