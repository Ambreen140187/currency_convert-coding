#!/usr/bin/env node
import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0044, "GBP": 0.0037, "PKR": 1
    },
    "GBP": {
        "USD": 1.21, "PKR": 271.79, "GBP": 1
    },
    "USD": {
        "PKP": 225.50, "GBP": 0.83, "USD": 1
    }
}
const answer:{from:"PKR"| "USD"| "GBP",to:"PKR"| "USD"| "GBP",amount:number} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "seclect your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "seclect your convertion currency:"
    }, {
        type: "number",
        name: "amount",
        message: "enter your amount :"
    },
])
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`your convertion ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid input");
}
