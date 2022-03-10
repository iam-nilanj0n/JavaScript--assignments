function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let x = a + b;
    result = x;
    return cb(result);
}

module.exports = RunCallback;
