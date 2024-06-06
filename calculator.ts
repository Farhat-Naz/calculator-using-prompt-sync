// calculator
var prompt = require("prompt-sync")();
let n1= parseInt(prompt("Enter a first number"));
let n2= parseInt(prompt("Enter second number"));
let operator=(prompt("Enter operator(+,-,*,/,%)"));
if(operator=="+"){
    console.log(`The answer of ${n1}${operator}${n2} is ${n1+n2} `);
}


else if(operator=="-"){
    console.log(`The answer of ${n1}${operator}${n2} is ${n1-n2} `);
}
else if(operator=="*"){
    console.log(`The answer of ${n1}${operator}${n2} is ${n1*n2} `);
}
else if (operator=="/"){
    console.log(`The answer of ${n1}${operator}${n2} is ${n1/n2} `);
}
else if (operator=="%"){
    console.log(`The answer of ${n1}${operator}${n2} is ${n1%n2} `);
else{
    console.log("Enter Correct Number");
}
export {};