const { read } = require('fs');
const fs = require('fs-extra');
const path = require('path');

const dbFolderPath = path.join(__dirname, 'db');
const filePath = path.join(dbFolderPath, 'post.json');

// Read data dari database
function readData() {
    return fs.readJsonSync(filePath);
}

// Menambahkan data baru ke database
function createData(newData) {
    const data = readData();
    data.push(newData);
    fs.writeJsonSync(filePath, data, { spaces: 2 });
}

// Mendapatkan data dari database berdasarkan ID
function getDataById(id) {
    const data = readData();
    return data.find(item => item.id === id);
}

// Mengupdate data dalam database
function updateData(updateData) {
    const data = readData();
    const index = data.findIndex(item => item.id === updateData.id);
    if (index !== -1) {
        data[index] = updateData;
        fs.writeJsonSync(filePath, data, { spaces: 2 });
    }
}

// Menghapus data dari database berdasarkan ID
function deleteData(id) {
    const data = readData();
    const newData = data.filter(item => item.id !== id);
    fs.writeJsonSync(filePath, newData, { spaces: 2 });
}

module.exports = {
    readData,
    createData,
    getDataById,
    updateData,
    deleteData,
};