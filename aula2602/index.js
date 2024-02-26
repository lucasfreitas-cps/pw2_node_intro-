const chalk = require("chalk")

function calculadora(n1 , n2 , op ){
    switch(op){
        case"+" :
        return(n1+ n2).toFixed(2)
        break
        case "-" :
        return(n1 - n2).toFixed(2)
        break
        case "*" :
        return(n1 * n2).toFixed(2)
        break
        case "/" :
        return(n1 / n2)        
         
    }
    
 


}

console.log(chalk.bgYellow.black(calculadora(15, 62, "+")) )
console.log(chalk.bgBlue.white(calculadora(144, 72, "-")))
console.log(chalk.bgWhite.red(calculadora(12, 7, "*")))
console.log(chalk.bgGreen.white(calculadora(625, 15, "/")))
console.log(chalk.bgRed.yellow(calculadora(6,8,"|")))

