const prompt= require('prompt-sync') ();
let weight = Number(prompt("enter your weight"))
let height = Number(prompt("enter your height"))
bmi = weight/(height*height)

if(bmi<18.5){
    console.log('you r under weight')
}
else if(bmi<=24.9){
    console.log('you r normal')

}
else if(bmi<= 29.9){

    console.log('you r over weight')
}
else{
    console.log('you r obese')
}