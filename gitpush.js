const fs = require('fs');
const path = require('path');
const moment = require('moment');
const simpleGit = require('simple-git');
const { resolve } = require('path');

let projectsDir = './code-arcade/';




// loops through file directory and outputs all paths of dirs
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


let finalArr = pathArr.flat()
let count = 0

// Attempted to write this function to ensure each Git push would complete before the next loop, but I think this is unrelated to the problem 
async function gitPushHandler(finalArr) {
  await new Promise((resolve) => {
    finalArr.forEach((i) => {
      try {
        gitPush(i)
      } catch(e) {
        console.log(e)
      } finally {
        count += 1
        if (count == finalArr.length) {
          resolve()
        }
      }
    })
  })
}




// Function to handle pushing to git with a given 'older' date
let longMan = 40;
  function gitPush(folder) {
  
    let commit = new simpleGit()

  let date = moment().subtract(longMan, 'd').format();

    console.log(folder)
  commit.add(folder)
   .commit(folder, {'--date--': date}, () => console.log('commit done')).push();



  longMan -= 1;
}


gitPushHandler(finalArr)