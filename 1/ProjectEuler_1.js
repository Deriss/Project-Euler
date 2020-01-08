function multiplesOf3and5(number) {
    return sumofMultUntil(3, number) +
        sumofMultUntil(5, number) -
        sumofMultUntil(15, number)
}

function sumofMultUntil(a, max) {
    var n = Math.floor((max - 1) / a);
    return a * (n + 1) * n / 2;
}

multiplesOf3and5(1000);
multiplesOf3and5(19564);