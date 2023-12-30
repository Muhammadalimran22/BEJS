// Buat folder /db jika belum ada
const fs = require('fs-extra');
const path = require('path');

const dbFolderPath = path.join(__dirname, 'db');
fs.ensureDirSync(dbFolderPath);

// Buat file post.json dengan data awal
const initialData = [];
const filePath = path.join(dbFolderPath, 'post.json');
fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
