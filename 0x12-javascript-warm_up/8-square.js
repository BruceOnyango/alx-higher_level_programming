#!/usr/bin/node
const argv = process.argv;

if (isNaN(argv[2])) {
  console.log('Missing size');
} else {
  for (let r = 0; r < argv[2]; r++) {
    let row = '';
    for (let c = 0; c < argv[2]; c++) row += 'X';
    console.log(row);
  }
}
