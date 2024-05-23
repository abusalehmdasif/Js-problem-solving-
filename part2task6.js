
let age = Number(prompt('enter age'))
 let student = prompt('student')
 let seniorcitizen = Number(prompt('senior citizen'))
 let fare= 800

 if(age<10){
    console.log('0')
 }
 else if(student== 'student'){
    console.log(fare/2)
 }
 else if(seniorcitizen>=60){
    console.log(fare*0.85)
 }
 
 else{
   console.log(fare)
 }
