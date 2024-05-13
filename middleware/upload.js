import multer from "multer";

const uploadData = multer({
    // must dest
    dest: "assets/"
});

export default uploadData;