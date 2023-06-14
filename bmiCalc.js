// BMI calculator

const bmi = function(pounds, inchesHigh) {
    var kg = pounds * .453592;
    var height = inchesHigh / 12;
    var mt = height * .3048;
    var bmi = (kg / mt**2);
    bmi = bmi.toFixed(2);

    if(bmi >= 30) {
        return "BMI = " + bmi + ": OBESE";
    } else if(bmi < 30 && bmi >= 25) {
        return "BMI = " + bmi + ": OVERWEIGHT";
    } else if(bmi < 25 && bmi >= 18.5) {
        return "BMI = " + bmi + ": HEALTHY WEIGHT";
    } else {
        return "BMI = " + bmi + ": UNDERWEIGHT";
    }
};
