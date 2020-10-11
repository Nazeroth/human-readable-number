module.exports = function toReadable(number) {
    const NUMBERS = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let stringArr = [];

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        stringArr.push(NUMBERS[number]);
    } else if (number < 100) {
        stringArr.push(NUMBERS[Math.floor(number / 10) * 10]);
        if (number % 10 > 0) {
            stringArr.push(NUMBERS[number % 10]);
        }
    }

    if (number >= 100) {
        stringArr.push(NUMBERS[Math.floor(number / 100)] + " hundred");
        console.log(stringArr);
    }

    if (number >= 100) {
        if (number % 100 <= 20) {
            stringArr.push(NUMBERS[number % 100]);
        } else {
            stringArr.push(NUMBERS[Math.floor((number % 100) / 10) * 10]);
            console.log(stringArr);
        }
    }

    if (number >= 100) {
        if (number % 100 >= 20) {
            stringArr.push(NUMBERS[Math.round(number % 10)]);
            console.log(stringArr);
        }
    }
    return stringArr.join(" ").trim();
};
