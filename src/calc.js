/**
 * Calculus function. Can do addition, mutiplication & division. Goes like num1 operator num2.
 * @param {*} num1 must be a number or a float
 * @param {*} num2 must be a number or a float
 * @param {*} operator must be "add" or "mult" or "div"
 * @returns number, float or string
 */
const calc = (num1, num2, operator) => {
  if(num1 && num2 && operator){
    if(['add', 'mult', 'div'].includes(operator)){
      if((typeof(num1) == 'number' || typeof(num1) == 'float') && (typeof(num2) == 'number' || typeof(num2) == 'float')){
        switch(operator) {
          case "add":
            return parseFloat((num1 + num2).toFixed(10))
          case "mult":
            return parseFloat((num1 * num2).toFixed(10))
          case "div":
            if(num2 == 0){
              return "Error!"
            }
            return parseFloat((num1 / num2).toFixed(10))
          default:
            return "Error!"
        }
      }
    }
    return "Error!"
  }
  return "Error!"
}

exports.calc = calc;