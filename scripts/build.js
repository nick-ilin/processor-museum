const fs = require('fs');
const csv = require('csv-parser');

const CSV_FILE = 'collection.csv';
const OUTPUT_JSON = 'src/data/collection.json';

const items = [];

fs.createReadStream(CSV_FILE)
  .pipe(csv())
  .on('data', (row) => {
    items.push(row);
  })
  .on('end', () => {
    fs.mkdirSync('src/data', { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(items, null, 2));
  });