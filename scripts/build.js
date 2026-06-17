const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const CSV_FILES = [
  { file: 'csv/gpu.csv', category: 'gpu' },
  { file: 'csv/cpu.csv', category: 'cpu' },
  //{ file: 'csv/mb.csv', category: 'mb' }
];
const OUTPUT_JSON = 'src/data/collection.json';
const allItems = [];

function processFile(fileConfig) {
  return new Promise((resolve, reject) => {
    const items = [];
    fs.createReadStream(fileConfig.file)
      .pipe(csv({ separator: ';' }))
      .on('data', (row) => {
        items.push({
          ...row,
          category: fileConfig.category
        });
      })
      .on('end', () => {
        allItems.push(...items);
        resolve();
      })
      .on('error', reject);
  });
}

async function build() {
  try {
    for (const fileConfig of CSV_FILES) {
      if (fs.existsSync(fileConfig.file)) {
        await processFile(fileConfig);
      }
    }

    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(allItems, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

build().catch(console.error);