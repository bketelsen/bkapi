const { processImages } = require('./images');


async function run() {
  const src = process.argv[2]
  const target = process.argv[3]
  await processImages(src,target);
}

try {
    run();
} catch (error) {
  console.log(error.message);
}
