function loveCalculator() {
    var love = Math.random() * 100;
    love = Math.floor(love);

    if(love >= 90) {
        return "Our love level = " + love + "%! MUCHO CALIENTE!";  // 90 - 100
    } else if(love <= 89 && love >= 75) {
        return "Our love level = " + love + "%! PRETTY HOT!";      // 75 - 89
    } else if(love <= 74 && love >= 50) {
        return "Our love level = " + love + "%! LUKEWARM!";        // 50 - 74
    } else if(love <= 49 && love >= 25) {
        return "Our love level = " + love + "%! CHILLY!";          // 25 - 49
    } else if(love <= 24 && love >= 10) {
        return "Our love level = " + love + "%! COLD!";            // 10 - 24
    } else {
        return "Our love level = " + love + "%! FROZEN TUNDRA!";   // 00 - 10
    }

}
console.log(loveCalculator());