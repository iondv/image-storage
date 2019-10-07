const sharp = require('sharp');

class SharpThumbnailGenerator {
  generate(source, options) {
    const format = options.format || 'png';
    return sharp(source)
      .resize(options.width, options.height)
      .max()
      .toFormat(format);
  }
}

module.exports = SharpThumbnailGenerator;
