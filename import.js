/**
 * Created by chang on 17-5-28.
 */
var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path')

mongoose.connect('mongodb://localhost/essay')

var filePath = './markdown/'
var EssayNewPost = require('./app/models/newEssay')

var Post = {
    readFile: function (fileName) {
        return new Promise(function (resolve, reject) {
            fs.readFile(fileName, 'utf-8', function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    },
    savePost: function(fileName, data) {
        console.log(data)
        var post = {
            title: 'db_essay_title',
            data: data
        }
        EssayNewPost.create(post, function (err, post) {
            if(err) {
                console.log(err)
            } else {
                console.log(`成功保存 ${fileName}`)
            }
        })
    }
}

fs.readdir(filePath, function(err, files) {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(function(fileName, index) {
        if (fileName == '.DS_Store') {
            return;
        }

        var target = path.join(filePath, fileName);

        fs.stat(target, function(err, stat) {
            if (err) {
                console.log(err);
                return;
            }

            Post.readFile(target).then(function(data) {
                Post.savePost(fileName, data);
                console.log('导入成功')
            }, function() {
                console.log('导入失败！' + target);
            })
        })
    });
});