const calc = (num1, num2, operator) => {

  if(operator == 'add'){
    return parseFloat((num1 + num2).toFixed(10))
  }
  if(operator == 'mult'){
    return parseFloat((num1 * num2).toFixed(10))
  }
  if(operator == 'div'){
    return parseFloat((num1 / num2).toFixed(10))
  }
  if(!num1 || !num2 || !operator){
    return "Error!"
  }
  return "Error in the operator name!"
}

exports.calc = calc;