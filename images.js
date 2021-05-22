const Image = require('@11ty/eleventy-img')
const { readdir } = require('fs/promises') // node helper for reading folders
const { parse, join, extname, basename } = require('path') // node helper for grabbing file names
const fs = require('fs')
const path = require('path')


export async function processImages(src, target) {

  const imageDir = src
  const files = await readdir(imageDir, { withFileTypes: true });

  try {
    const jsonString = fs.readFileSync("./data/.build/data.json");
    const mydata = JSON.parse(jsonString);
    console.log(mydata);

    for (const file of files) {
      if (file.isFile()) {
        const stats = await Image(imageDir + '/' + file.name, {
          widths: [300, 600, 1000, 1400], // edit to your heart's content
          outputDir: target,
          urlPath: "/g/images/",
          filenameFormat: (id, src, width, format) => {
            // make the filename something we can recognize.
            // In this case, it's just:
            // [original file name] - [image width] . [file format]
            const extension = extname(src);
            const name = basename(src, extension);
            return `${parse(file.name).name}-${width}.${format}`
          },
        })

        const extension = extname(file.name);
        const name = basename(file.name, extension);
        const idx = mydata["images"].findIndex(i => { return i.id === name })
        mydata["images"][idx]["formats"] = stats
      }
      if (file.isDirectory()) {
        const newsrc = join(imageDir, file.name)
        const newdest = join(target, file.name)
        await processImages(newsrc, newdest)
      }

    }
    var jsonContent = JSON.stringify(mydata);
    var jsonPath = path.join('.', 'data', '.build', "data.json")
    fs.writeFile(jsonPath, jsonContent, 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    });

  } catch (err) {
    console.log(err);
    return;
  }

}