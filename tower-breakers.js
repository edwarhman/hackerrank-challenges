function towerBreakers(n, m) {
    // Write your code here
    if (m === 1) {
        return 2;
    }
    return n % 2 === 0 ? 2 : 1;
}


// I didn't consider the case that m = 1, but once I consider it there was no problem.