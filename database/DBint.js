import pg from "pg";
import "dotenv/config";

const {Pool} = pg;

const passport = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

export const databaseConnection = async () => {
    try{
        await passport.query("SELECT NOW()");
        console.log("DB connected");
    } catch(err){
        console.log("DB error");
    }
}

