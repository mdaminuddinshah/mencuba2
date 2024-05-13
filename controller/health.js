const getHealth = (req,res) => {
    res.status(201);
    res.send("Connected");
    console.log("Connected")
}

export default getHealth;