const fs = require('fs');
const moment = require('moment');
const simpleGit = require('simple-git');


let projectsDir = './out/arcade/code-arcade';

fs.readdir(projectsDir, function (err, files) {
  if (err) {
    console.error('could not list dir', err);
  }

  

  subby = [];
  files.forEach((file) => {
    subby.push(projectsDir + '/' + file);
  });

  subby.forEach((question) => {
    fs.readdir(question, function(err, i) {
        if (err) {
            console.error('could not list dir', err);
          }
        
        pathArr = []
        i.forEach(path => {
            pathArr.push(question + '/' + path)
        })
        
        // count = pathArr.length
        // console.log(count)

        pathArr.forEach(path => {

            pushCode(path)
        })
        
    })
  })
});

counter = 30

function pushCode(path) {
  let date = moment().subtract(counter, 'd').format()

  simpleGit().add([path]).commit(date, {'--date': date}).push()

  counter -= 1

}