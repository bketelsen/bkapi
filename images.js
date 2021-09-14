const Image = require('@11ty/eleventy-img')
const { readdir } = require('fs/promises') // node helper for reading folders
const { parse, join, extname, basename } = require('path') // node helper for grabbing file names
const fs = require('fs')
const path = require('path')


export async function processImages(src, target) {

  const imageDir = src
  const files = await readdir(imageDir, { withFileTypes: true });

  try {
    const jsonString = fs.readFileSync("data/.build/data.json");
    const mydata = JSON.parse(jsonString);

    for (const file of files) {
      if (file.isFile()) {
        const stats = await Image(imageDir + '/' + file.name, {
          widths: [300, 600, 1000, 1200, 1400, 1600, 1800, 2000], // edit to your heart's content
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
        const idx = mydata["images"].findIndex((i) => {
          return i.id === name
        })
        if (idx > -1) {
          mydata["images"][idx]["formats"] = stats
        } else {
          console.log("yaml not found", file, name)
        }
        let lowsrc = stats.jpeg[0];
        let highsrc = stats.jpeg[stats.jpeg.length - 1];
        let sizes = "100vw"

        const imgTag = `<picture>
    ${Object.values(stats).map(imageFormat => {
          return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
        }).join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${mydata["images"][idx]["file_name"]}"
        loading="lazy"
        decoding="async">
    </picture>`;
        mydata["images"][idx]["image_tag"] = imgTag

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