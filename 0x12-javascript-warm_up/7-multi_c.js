#!/usr/bin/node

const argv = process.argv;

if (isNaN(argv[2])) {
  console.log('Missing number of occurrences');
} else {
  const x = Number(argv[2]);
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
