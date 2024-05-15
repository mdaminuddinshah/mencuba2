import multer from "multer";
import path from "path";
import crypto from "crypto";

// const uploadData = multer({
//     // must dest
//     dest: "assets/"
// });


// kita perlukan middleware untuk pass images upload ke dalam folder assets
// reason kedua, kita guna middleware utk create random filename utk setiap gambar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/')
    },
    filename: function (req, file, cb) {
      const uuid = crypto.randomUUID();
      cb(null, uuid + path.extname(file.originalname))
    }
  })
  
  const uploadData = multer({ storage: storage });

export default uploadData;