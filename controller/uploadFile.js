export const upload = (req,res) => {

    const file = req.file;

    res.status(201).json({
        message: "upload file",
        file: file
    })
};