cat perintah-terminal.sh
# cd -> digunakan untuk berpindah directory
cd namaFolder # pindah kedalam folder namaFolder didalam current directory
cd ./namaFolder # pindah kedalam folder namaFolder didalam current directory
cd ../namaFolder # pindah kedalam folder namaFolder didalam parent directory
cd ~/namaFolder # pindah kedalam folder namaFolder didalam home directory

# touch -> digunakan untuk membuat filebaru
touch namafile.ekstensi # ex : touch app.js, touch note.txt

# mv -> digunakan untuk mengubah nama atau memindahkan file atau folder
mv app.js main.js # mengubah nama file dari app.js menjadi main.js
mv app.js ./src/app.js # memindahkan file dari currenct directory kedalam folder src
mv folder1 folder2 # mengubah nama folder dari folder1 menjadi folder2
mv folder1 ./folder2/folder1 # memindahkan folder folder1 dari currenct directory kedalam folder folder2

# cp -> digunakan untuk menyalin file
cp app.js app2.js # menyalin file app.js dengan nama app2.js
cp -r src src2 # menyalin folder src dengan nama app2.js

# rm -> digunakan untuk menghapus file
rm app.js # menghapus file app.js
rmdir folder1 # menghapus folder1 (folder1 harus kosong)
rm -rf folder1 # menghapus folder1 secara paksa (folder1 ada isi)%         