let fs = require('fs');
let path = require('path');
let writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
let { stdout, stdin, exit } = require('process');
stdout.write('enter text:');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    endFunc();
  }
  writeStream.write(data);
});
process.on('SIGINT', endFunc);
function endFunc() {
  stdout.write('Goodby!');
  exit();
}