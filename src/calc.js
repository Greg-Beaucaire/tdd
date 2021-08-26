const calc = (num1, num2, operator) => {

  if(operator == 'add'){
    return num1 + num2
  }
  if(operator == 'mult'){
    return num1 * num2
  }
  if(operator == 'div'){
    return num1 / num2
  }
  return "Error in the operator name!"
  
}

exports.calc = calc;