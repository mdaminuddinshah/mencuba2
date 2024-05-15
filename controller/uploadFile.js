import { passport } from "../database/DBint.js";



export const upload = async (req,res) => {

    try{
        // req.file comes from middleware uploadData.single("images")
        const file = req.file;

        // RETURNING * utk return semua values yg baru diisi
        // kalau selepas INSERT INTO, UPDATE SET, DELETE WHERE, semua ni hanya buat new values, dia tak akan return values yg diubah
        // so untuk return balik values yg kita ubah, perlu letak RETURNING * pada last sql statement
        const queryInsertTableUpload = `
            INSERT INTO files(fieldname, originalname, encoding, mimetype, destination, filename, path, size)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *
        `;
      
        const dataRes = await passport.query(queryInsertTableUpload, [
                file.fieldname,
                file.originalname,
                file.encoding,
                file.mimetype,
                file.destination,
                file.filename,
                file.path,
                file.size
            ]);

        const data = dataRes.rows[0];

        res.status(201).json({
            message: "upload file",
            file: data
        })
        console.log(dataRes)
        console.log("successfully upload")


        } catch(err){
            res.status(404).json({
                message: "cannot upload files"
            })
            console.log("cannot upload files")
    }
    
};