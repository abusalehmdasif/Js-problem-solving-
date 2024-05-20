const prompt= require('prompt-sync') ();
const budget= prompt("what is your budget?");
const expense= prompt("what is your expense?");
const remaining= (budget-expense);
console.log("remaining money",remaining)