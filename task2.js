    var s = process.argv[2];
    var k = process.argv[3];
    var newString;
    newString = '';
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        var code = char.charCodeAt(0);
        var newCode = code + k;
        var newChar = String.fromCharCode(newCode);
        newString = newString + newChar;
    }
    //process.stdout.write(newString);
    console.log(newString);