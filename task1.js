    var n = process.argv[2];
    var e = process.argv[3];
    function getSum(n,e){
        var i, sum;
        sum = 0;
        for (i = 1; i <= n; i+= 1){
            sum += Math.pow(i,e);
        }
        return sum.toString();
    }
    console.log(getSum(n,e));