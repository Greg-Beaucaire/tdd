const calc = (num1, num2, operator) => {
  if(num1 && num2 && operator){
    if(['add', 'mult', 'div'].includes(operator)){
      if(operator == 'add'){
        return parseFloat((num1 + num2).toFixed(10))
      }
      else if(operator == 'mult'){
        return parseFloat((num1 * num2).toFixed(10))
      }
      else if(operator == 'div'){
        if(num2 == 0){
          return "Error!"
        }
        return parseFloat((num1 / num2).toFixed(10))
      }
    }
    return "Error!"
  }
  return "Error!"
}

exports.calc = calc;