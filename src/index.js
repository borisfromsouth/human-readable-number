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

switch(thousands){
    case '1':
        thousands_res = "one thousand ";
        break;
    default:
        thousands_res = "";
        break;
}

switch(hundreds){
    case '1':
        hundreds_res = "one hundred ";
        break;
    case '2':
        hundreds_res = "two hundred ";
        break;
    case '3':
        hundreds_res = "three hundred ";
        break;
    case '4':
        hundreds_res = "four hundred ";
        break;
    case '5':
        hundreds_res = "five hundred ";
        break;
    case '6':
        hundreds_res = "six hundred ";
        break;
    case '7':
        hundreds_res = "seven hundred ";
        break;
    case '8':
        hundreds_res = "eight hundred ";
        break;
    case '9':
        hundreds_res = "nine hundred ";
        break;
    default:
        hundreds_res = "";
        break;
}

switch(tens){
    case '1':
        switch(units){
            case '1':
                tens_res = "eleven ";
                break;
            case '2':
                tens_res = "twelve ";
                break;
            case '3':
                tens_res = "thirteen ";
                break;
            case '4':
                tens_res = "fourteen ";
                break;
            case '5':
                tens_res = "fifteen ";
                break;
            case '6':
                tens_res = "sixteen ";
                break;
            case '7':
                tens_res = "seventeen ";
                break;
            case '8':
                tens_res = "eighteen ";
                break;
            case '9':
                tens_res = "nineteen ";
                break;
            case '0':
                tens_res = "ten ";
                break;
        }
        return (thousands_res  + hundreds_res  + tens_res  + units_res).trim();
    case '2':
        tens_res = "twenty ";
        break;
    case '3':
        tens_res = "thirty ";
        break;
    case '4':
        tens_res = "forty ";
        break;
    case '5':
        tens_res = "fifty ";
        break;
    case '6':
        tens_res = "sixty ";
        break;
    case '7':
        tens_res = "seventy ";
        break;
    case '8':
        tens_res = "eighty ";
        break;
    case '9':
        tens_res = "ninety ";
        break;
    default:
        tens_res = "";
        break;
    }

    switch(units){
        case '1':
            units_res = "one ";
            break;
        case '2':
            units_res = "two ";
            break;
        case '3':
            units_res = "three ";
            break;
        case '4':
            units_res = "four ";
            break;
        case '5':
            units_res = "five ";
            break;
        case '6':
            units_res = "six ";
            break;
        case '7':
            units_res = "seven ";
            break;
        case '8':
            units_res = "eight ";
            break;
        case '9':
            units_res = "nine ";
            break;
        default:
            units_res = "";
            break;
    }

    if(thousands_res === "" && hundreds_res === "" && tens_res === "" && units_res === "") return "zero";


    return (thousands_res  + hundreds_res  + tens_res  + units_res).trim();
}
