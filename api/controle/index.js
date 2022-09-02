function inicio(req, res) {
    res.status(200).send({
        message: "Hello home",
    });
}

function teste(req, res) {
    res.status(200).send({
        message: "Testing index!",
    });
}

module.exports = {
    inicio,
    teste,
};