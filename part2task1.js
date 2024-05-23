const Prompt= require('prompt-sync') ();

let burger = Number(prompt('burger price'))
if(burger>500){
    console.log('coke is free')
}
else{
    console.log('coke is 30 taka')
}