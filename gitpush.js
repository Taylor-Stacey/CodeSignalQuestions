const fs = require('fs');
const path = require('path');
const moment = require('moment');
const simpleGit = require('simple-git');

let projectsDir = './out/arcade/code-arcade';

function getFileSync(dir, files = []) {
  const listing = fs.readdirSync(dir, { withFileTypes: true });
  let dirs = [];

  for (let f of listing) {
    const fullName = path.join(dir, f.name);
    if (f.isFile()) {
      files.push(fullName);
    } else if (f.isDirectory()) {
      dirs.push(fullName);
    }
  }
  for (let d of dirs) {
    getFileSync(d, files);
  }
  return dirs;
}

let files = getFileSync(projectsDir);

// gets sub directories of parent folder
let pathArr = [];
files.forEach((file) => {
  let yeet = getFileSync(file);
  pathArr.push(yeet);
});

for (let i = 0; i< pathArr.length, i ++;) {
  for (let j = 0; j < pathArr[i].length, j ++;){
    console.log(pathArr[j])
    // gitPush(pathArr[i][j])
  }
}

pathArr.every((subPath) => {
  // longMan +=  subPath.length


  // subPath.every((folder) => {
  //   gitPush(folder)

  // });
});

 function gitPush(folder) {
  let longMan = 40;

  let date = moment().subtract(longMan, 'd').format();

   simpleGit().add([folder]).commit(folder, { '--date': date }).push();
  longMan -= 1;
}
// function GetFinalPaths(projectsDir) {
//   fs.readdirSync(projectsDir, function (err, files) {
//     if (err) {
//       console.error('could not list dir', err);
//     }

//     subby = [];
//     files.forEach((file) => {
//       subby.push(projectsDir + '/' + file);
//     });

//     subby.forEach((question) => {
//       fs.readdirSync(question, function (err, i) {
//         if (err) {
//           console.error('could not list dir', err);
//         }

//         pathArr = [];
//         i.forEach((path) => {
//           pathArr.push(question + '/' + path);
//         });
//         console.log(pathArr);
//         return pathArr;
//       });
//     });
//   });
// }

// console.log(GetFinalPaths(projectsDir));

// console.log(paths);

// counter = 30;

// function pushCode(path) {
//  ();

//   counter -= 1;
// }
