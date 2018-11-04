/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getNum = function(input) {
    let result;
    const validNumber = /^\d+(\.\d+)?(\/\d+)?[a-zA-Z]+/;
    const noNumber = /^[a-zA-Z]+$/;
    
    if (validNumber.test(input)) {
      result = input.match(/^\d+(\.\d+)?(\/\d+)?/)[0];

      const decimalFraction = /^\d+(\.\d+)?\/\d+/;
      const splittedFraction = result.split("/");

      result = splittedFraction.reduce((total, e) => total / e);

      return result;
    } else if (noNumber.test(input)) return 1;
    else return "invalid number";
  };
  
  this.getUnit = function(input) {
    const unit = input.match(/[a-zA-Z]+$/)[0];
    let result;
    
    switch (unit) {
      case "gal":
      case "GAL":
      case "lbs":
      case "LBS":
      case "mi":
      case "MI":
      case "l":
      case "L":
      case "kg":
      case "KG":
      case "km":
      case "KM":
        result = unit;
        break;
      default:
        result = "invalid unit";
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch (initUnit) {
      case "gal":
      case "GAL":
        result = "L";
        break;
      case "lbs":
      case "LBS":
        result = "kg";
        break;
      case "mi":
      case "MI":
        result = "km";
        break;
      case "l":
      case "L":
        result = "gal";
        break;
      case "kg":
      case "KG":
        result = "lbs";
        break;
      case "km":
      case "KM":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch (unit) {
      case "gal":
      case "GAL":
        result = "gallons";
        break;
      case "lbs":
      case "LBS":
        result = "pounds";
        break;
      case "mi":
      case "MI":
        result = "miles";
        break;
      case "l":
      case "L":
        result = "liters";
        break;
      case "kg":
      case "KG":
        result = "kilograms";
        break;
      case "km":
      case "KM":
        result = "kilometers";
        break;
      default:
        result = "invalid unit";
      }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if (initNum !== "invalid number") {
      switch (initUnit) {
        case "gal":
          result = initNum * galToL;
          break;
        case "lbs":
          result = initNum * lbsToKg;
          break;
        case "mi":
          result = initNum * miToKm;
          break;
        case "L":
          result = initNum / galToL;
          break;
        case "kg":
          result = initNum / lbsToKg;
          break;
        case "km":
          result = initNum / miToKm;
          break;
        default:
          result = initNum;
      }
      result = Math.round(result * 1000000) / 1000000;
    } else if (initNum === "invalid number") result = initNum;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    console.log(initNum, initUnit, returnNum, returnUnit);
    if (returnNum === "invalid number") result = "invalid number";
    else if (returnUnit === "invalid unit") result = "invalid unit";
    else result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;

    return result;
  };
  
}

module.exports = ConvertHandler;