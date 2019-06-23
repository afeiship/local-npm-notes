const runAll = require('npm-run-all');

runAll(['clean', 'lint', 'build:*'], { parallel: true })
  .then((results) => {
    console.log('results:->', results);
    console.log(`${results[0].name}: ${results[0].code}`); // clean: 0
    console.log(`${results[1].name}: ${results[1].code}`); // lint: 0
    console.log(`${results[2].name}: ${results[2].code}`); // build: 0
  })
  .catch((err) => {
    console.log('failed!');
  });

// runAll(['build:* -- --watch'], { parallel: true })
//   .then(() => {
//     console.log('done!');
//   })
//   .catch((err) => {
//     console.log('failed!');
//   });
