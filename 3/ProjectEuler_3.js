function largestPrimeFactor(number) {


    // Good luck!


    for (var i = Math.floor(number / 2); i > 0; i--) {
        if (number % i == 0) {
            if (i != 1) {

                return largestPrimeFactor(i);
            } else {
                return number
            }
        }
    }

}
console.log(largestPrimeFactor(2));
// console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));