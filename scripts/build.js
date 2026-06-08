const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const CSV_FILE = 'collection.csv';
const ASSETS_INPUT = 'public/assets';
const OUTPUT_DIR = 'public';
const OUTPUT_JSON = 'src/data/collection.json';

const items = [];

function copyImages() {
  const smallImages = fs.readdirSync(ASSETS_INPUT);
  smallImages.forEach(img => {
    fs.copyFileSync(
      path.join(ASSETS_INPUT, img),
      path.join(OUTPUT_DIR, 'assets', img)
    );
  });

  const bigImages = fs.readdirSync(path.join(ASSETS_INPUT, 'big'));
  bigImages.forEach(img => {
    fs.copyFileSync(
      path.join(ASSETS_INPUT, 'big', img),
      path.join(OUTPUT_DIR, 'assets', 'big', img)
    );
  });
}

fs.createReadStream(CSV_FILE)
  .pipe(csv())
  .on('data', (row) => {
    items.push(row);
  })
  .on('end', () => {
    fs.mkdirSync('src/data', { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(items, null, 2));
    fs.mkdirSync(`${OUTPUT_DIR}/assets`, { recursive: true });
    fs.mkdirSync(`${OUTPUT_DIR}/assets/big`, { recursive: true });
    copyImages();
  });