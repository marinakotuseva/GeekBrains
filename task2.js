    var s = process.argv[2];
    var k = process.argv[3];
    var lowCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var alphLength = lowCaseLetters.length;
    function encode(){
        var pos,i;
        var newString = "";
        for (i=0; i < s.length; i+=1)
        {
            pos = lowCaseLetters.indexOf(s[i].toLowerCase());
            if(pos !== -1){
              if (s[i].toLowerCase() === s[i]) {
                newString += lowCaseLetters[(pos + k) % (alphLength )];
              } else {
                 newString += (lowCaseLetters[(pos + k) % (alphLength )]).toUpperCase();
              }
            }           
            else {
                newString += s[i];
            }
      }
      console.log(newString);
    }
    encode();