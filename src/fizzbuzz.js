const fizzbuzz = (num) => {
    return (num ? num % 5 == 0 ? num % 7 ==0 ? "fizzbuzz" : "buzz" : (num % 7 == 0?"fizz":"") :"Error!");
}

exports.fizzbuzz = fizzbuzz;