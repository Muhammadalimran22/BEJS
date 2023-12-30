const { createData, getDataById, updateData, deleteData } = require('./crud');

// Contoh penggunaan

// CREATE Data
// createData({ id: 4, title: 'Contoh Posting 4', content: 'Ini adalah konten posting 4' });
// const postData = getDataById(4);
// console.log('Data Posting:', postData);

createData({ id: 5, title: 'Contoh Posting 5', content: 'Ini adalah konten posting 5' });
const postData = getDataById(5);
console.log('Data Posting:', postData);

// UPDATE Data
// updateData({ id: 1, title: 'Post Instagram Pemandangan', content: 'Konten telah diperbarui.' });

// DELETE Data
// deleteData(1);

// GET Data By ID
// getDataById(2);

