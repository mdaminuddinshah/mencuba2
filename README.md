<!-- cara upload file dengan multer -->

1. create folder middleware
    - create file utk upload, e.g. upload.js
2. dalam upload.js, import multer
    - import multer from "multer"
    - const uploadData = multer({dest: "assets/"})
        - dest = tu wajib, tak boleh ubah nama
        - "assets/" = ialah folder utk simpan image yg di upload
    - export default uploadData;
3. pergi ke index.js, import uploadData dari middleware
    - letak uploadData.single("images") sebagai middleware di uploadFile.js
        - app.post("/upload", uploadData.single("images"), uploadFile);
4. pergi ke uploadFile.js
    - buat const file = req.file;
    - letak file dalam json file: file

<!-- cara masukkan file yg diupload ke database -->
1. 