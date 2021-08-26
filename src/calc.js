const calc = (num1, num2, operator) => {

  if(operator == 'add'){
    return parseFloat((num1 + num2).toFixed(10))
  }
  if(operator == 'mult'){
    return parseFloat((num1 * num2).toFixed(10))
  }
  if(operator == 'div'){
    if(num2 == 0){
      return "Can't divide by 0"
    }
    return parseFloat((num1 / num2).toFixed(10))
  }
  if(!num1 || !num2 || !operator){
    return "Error!"
  }
  return "Error in the operator name!"
}

exports.calc = calc;