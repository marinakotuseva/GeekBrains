    var s = process.argv[2];
    var k = process.argv[3];
    var newString = "";
    var i, code;

    // option 1
    for (i = 0; i < s.length; i+= 1) {
        code = s.charCodeAt(i);
        if (code < 123 && code > 64) {
            code += k;
        }
        newString += String.fromCharCode(code);
    }
    //process.stdout.write(newString);
    console.log(newString);