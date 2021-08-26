exports.alphabetSort = (req, res) => {
    var stringWord = req.body.words;
    var stringArray = stringWord.split("").sort();
    var result = stringArray.join('');
    return res.status(200).json({
        statusText: "OK",
        message: "Success Sort Alphabet",
        result,
    });
};