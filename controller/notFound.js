const notFound = (req,res) => {
    res.status(404);
    res.send("Page not found");
    console.log("Page not found");
}

export default notFound;
