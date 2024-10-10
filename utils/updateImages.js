const fs = require('fs');
const path = require('path');

// Define the paths
const imagesDir = path.join(__dirname, '../assets/images'); // Adjusted relative path to assets/images
const outputFilePath = path.join(__dirname, '../constants/images/image.js'); // Adjusted relative path to image.js

// Define a list of supported image extensions
const supportedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

// Read all image files in the directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    return console.error('Could not read the images directory:', err);
  }

  // Filter files by supported extensions and create an object with the format {key: value}
  const imageImports = files
    .filter(file =>
      supportedExtensions.includes(path.extname(file).toLowerCase()),
    )
    .map(file => {
      const key = path.basename(file, path.extname(file)); // Remove file extension for the key
      return `  ${key}: require('../../assets/images/${file}')`; // Adjust the require path to match folder structure
    })
    .join(',\n');

  // Construct the output content
  const content = `export const images = {\n${imageImports}\n};\n`;

  // Write the content to image.js
  fs.writeFile(outputFilePath, content, err => {
    if (err) {
      return console.error('Could not write to image.js:', err);
    }
    console.log('image.js has been updated with the new images!');
  });
});
