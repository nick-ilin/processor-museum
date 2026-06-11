const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const CSV_FILE = 'collection.csv';
const OUTPUT_JSON = 'src/data/collection.json';

const items = [];

fs.createReadStream(CSV_FILE)
  .pipe(csv({ separator: ';' }))
  .on('data', (row) => {
    items.push(row);
  })
  .on('end', () => {
    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(items, null, 2));
  });