import { passport } from "../database/DBint.js";

// TEXT = utk kemugkinan panjang, jadi kita guna TEXT INSTEAD OF STRING
const queryImages = `
    CREATE TABLE IF NOT EXISTS files(
        id SERIAL PRIMARY KEY,
        fieldname VARCHAR(255) NOT NULL,
        originalname VARCHAR(255) NOT NULL,
        encoding VARCHAR(255) NOT NULL,
        mimetype VARCHAR(255) NOT NULL,
        destination VARCHAR(255) NOT NULL,
        filename VARCHAR(255) NOT NULL,
        path TEXT,
        size INT
    )
`;

const queryTableImages = async (req,res) => {
    try{
        await passport.query(queryImages);
        
        console.log("TABLE images created")
    } catch(err){
        
        console.log("cannot create table")
    }
    
}

export default queryTableImages;