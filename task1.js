    var n = process.argv[2];
    var e = process.argv[3];
    var i, sum;
    sum = 0;
    for (i = 1; i <= n; i++){
      sum = sum + Math.pow(i,e);
    }
    process.stdout.write(sum.toString());