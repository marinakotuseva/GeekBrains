    var t1 = Number(process.argv[2]);
    var t2 = Number(process.argv[3]);
    function timeWords(){
        var res, str, sum;
        res = "";
        sum = t1 + t2;
        if (sum >= 3600) {
            var hours = Math.floor(sum/3600);
            if (hours === 1) {
                str = " час ";
                } else {
                if (hours > 1 && hours  <= 4) {
                    str = " часа ";
                } else {
                    str = " часов ";
                }
            }
            res = res + hours + str;
            sum = sum - hours*3600;
        }
        if (sum >= 60) {
            var minutes = Math.floor(sum/60);
            if (minutes === 1) {
                str = " минута ";
            } else {
                if (minutes > 1 && minutes  <= 4) {
                    str = " минуты ";
                } else {
                    str = " минут ";
                }
            }
            res = res + minutes + str;
            sum = sum - minutes*60;
        }
        if (sum > 0) {
            var seconds = sum;
            if (seconds > 0) {
                if (seconds === 1) {
                    str = " секунда";
                } else {
                    if (seconds > 1 && seconds  <= 4) {
                        str = " секунды";
                    } else {
                        str = " секунд";
                    }
                }
                res = res + seconds + str;
            }
        }
        if (res === "") {
            res = "0 секунд";
        }
        return res;
    }
    console.log(timeWords().trim());