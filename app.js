import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bold.yellow(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.blue(`<<<=========>>>  ${chalk.blueBright.bold("Welcome To 'Hafeez Siddiqui' - Currency Converter")}  <<<=========>>>`));
console.log(chalk.bold.yellow(`\t\t <<<===============================================>>>\n`));
//name the currencies and write their exchange rates.
let exchange_rates = {
    "USD": 1, // BASE CURRENCY
    "EUR": 0.9, //EURO
    "JYP": 113, //JAPANESE CUURENCY(YAN)
    "CAD": 1.4, //CANADIAN DOLLAR
    "AUD": 1.65, //AUSTRALIAN DOOLAR
    "PKR": 277.79, //PAKISTANI RUPEES
    //WE CAN ADD MORE CURRENCIES AND THEIR EXCHANGE RATES
};
//PROMPT THE USER TO SELECT THE CURRENCIES FROM AND TO
let user_answer = await inquirer.prompt([
    {
        name: `from_currency`,
        type: `list`,
        message: (chalk.bold.magentaBright(`Select The Currency To Convert From: `)),
        choices: [`USD`, `EUR`, `JYP`, `CAD`, `AUD`, `PKR`]
    },
    {
        name: `to_currency`,
        type: `list`,
        message: (chalk.bold.yellowBright(`Select the Currency To Convert into: `)),
        choices: [`USD`, `EUR`, `JYP`, `CAD`, `AUD`, `PKR`]
    },
    {
        name: `amount`,
        type: `input`,
        message: (chalk.bold.cyanBright(`Enter The Amount To Convert`))
    }
]);
//Perform Currency Conversion By Formula
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display The Converted Amount
console.log(chalk.green(`${amount} ${user_answer.from_currency} is equal to ${converted_amount.toFixed(2)} ${user_answer.to_currency}`));
