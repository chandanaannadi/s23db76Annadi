exports.api = function (req, res) {
    res.write('[');
    res.write('{"resource":"pizza", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};