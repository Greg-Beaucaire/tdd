const calc = (num1, num2, operator) => {
  if(operator == 'add'){
    return num1 + num2
  }
  if(operator == 'mult'){
    return num1 * num2
  }
}

exports.calc = calc;