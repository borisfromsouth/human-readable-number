module.exports = function toReadable (number) {
let units;
let tens;
let hundreds;
let thousands;

let units_res = "";
let tens_res = "";
let hundreds_res = "";
let thousands_res = "";

let numberString = number.toString();
if(numberString.length === 4){
    units = numberString[3];
    tens = numberString[2];
    hundreds = numberString[1];
    thousands = numberString[0];
}

if(numberString.length === 3){
    units = numberString[2];
    tens = numberString[1];
    hundreds = numberString[0];
}

if(numberString.length === 2){
    units = numberString[1];
    tens = numberString[0];
}

if(numberString.length === 1){
    units = numberString[0];
}

/*if(number / 1000 !== 0) {
thousands = number / 1000;
number -= thousands * 1000;
}
if(number / 100 !== 0) {
    hundreds = number / 100;
    number -= hundreds * 100;
}*/
/*if(number / 10 !== 0) {
    tens = number / 10;
    number -= tens * 10;
}
units = number;*/

switch(units){
    case '1':
        units_res = "one";
        break;
    case '2':
        units_res = "two";
        break;
    case '3':
        units_res = "three";
        break;
    case '4':
        units_res = "four";
        break;
    case '5':
        units_res = "five";
        break;
    case '6':
        units_res = "six";
        break;
    case '7':
        units_res = "seven";
        break;
    case '8':
        units_res = "eight";
        break;
    case '9':
        units_res = "nine";
        break;
    case '0':
        units_res = "zero";
        break;
}

/*switch(thousands){
    case 1:
        thousands = "one thousand";
        break;
    case 2:
        thousands = "two thousand";
        break;
    case 3:
        thousands = "three thousand";
        break;
    case 4:
        thousands = "four thousand";
        break;
    case 5:
        thousands = "five thousand";
        break;
    case 6:
        thousands = "six thousand";
        break;
    case 7:
        thousands = "seven thousand";
        break;
    case 8:
        thousands = "eight thousand";
        break;
    case 9:
        thousands = "nine thousand";
        break;
}

switch(hundreds){
    case 1:
        hundreds = "one hundreds";
        break;
    case 2:
        hundreds = "two hundreds";
        break;
    case 3:
        hundreds = "three hundreds";
        break;
    case 4:
        hundreds = "four hundreds";
        break;
    case 5:
        hundreds = "five hundreds";
        break;
    case 6:
        hundreds = "six hundreds";
        break;
    case 7:
        hundreds = "seven hundreds";
        break;
    case 8:
        hundreds = "eight hundreds";
        break;
    case 9:
        hundreds = "nine hundreds";
        break;
}*/

switch(tens){
    case '1':
        switch(units){
            case '1':
                tens_res = "eleven";
                break;
            case '2':
                tens_res = "twelve";
                break;
            case '3':
                tens_res = "thirteen";
                break;
            case '4':
                tens_res = "fourteen";
                break;
            case '5':
                tens_res = "fifteen";
                break;
            case '6':
                tens_res = "sixteen";
                break;
            case '7':
                tens_res = "seventeen";
                break;
            case '8':
                tens_res = "eighteen";
                break;
            case '9':
                tens_res = "nineteen";
            case '0':
                tens_res = "ten";
                break;
        }
        return (thousands_res + " " + hundreds_res + " " + tens_res /*+ " " + units_res*/).trim();
    case '2':
        tens_res = "twenty";
        break;
    case '3':
        tens_res = "thirty";
        break;
    case '4':
        tens_res = "fourty";
        break;
    case '5':
        tens_res = "fivety";
        break;
    case '6':
        tens_res = "sixty";
        break;
    case '7':
        tens_res = "seventy";
        break;
    case '8':
        tens_res = "eightty";
        break;
    case '9':
        tens_res = "ninety";
        break;
    default:
        break;
}


if(units === "0" && tens !== undefined) return (thousands_res + " " + hundreds_res + " " + tens_res).trim();


return (thousands_res + " " + hundreds_res + " " + tens_res + " " + units_res).trim();
}
