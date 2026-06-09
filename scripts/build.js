const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const CSV_FILE = 'collection.csv';
const OUTPUT_JSON = 'src/data/collection.json';

const items = [];

function generateId(row) {
  const order = row.order || '';
  const brand = (row.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const family = (row.family || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${brand}_${family}_${order}`;
}

fs.createReadStream(CSV_FILE)
  .pipe(csv({ separator: ';' }))
  .on('data', (row) => {
    items.push(row);
  })
  .on('end', () => {
    const processedItems = items.map((item) => {
      const newId = generateId(item);
      return { ...item, id: newId };
    });

    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(processedItems, null, 2));
  });