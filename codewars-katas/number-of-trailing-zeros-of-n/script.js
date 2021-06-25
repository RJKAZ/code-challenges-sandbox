function trailingZerosFactorial(n) {
    var result = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
        }
    }
    return result;
}

console.log(trailingZerosFactorial(8));
console.log(trailingZerosFactorial(9));
console.log(trailingZerosFactorial(1000));