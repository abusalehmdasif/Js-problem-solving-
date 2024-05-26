// const cars= ['audi','BMW','Toyota','nissan'];

// console.log(cars);

// console.log(cars.length);

// console.log(cars[3])

// cars.push('prado');

//  cars.pop();

// console.log(cars.indexOf('audi'))

// foreach loop

// const nums=[1,3,5,6,9]
// nums.foreach=(function(num)
// {
//     if(num % 2 == 0){
//      (   console.log(num )
//     }
// })

const nums2=[1,2,3,4,5,6,7,8]
num.foreach=(function(nums2){
    if(nums2 % 2  != 0){
        console.log(nums2)
    }
}

)



//array map
const nums2 = [1, 2, 3, 4, 5];

const doubleNums = nums.map(function(key)
{
   //return odd numbers
 
    if(key % 2 != 0)
    {
         return key;
    }
});

console.log(doubleNums);



// use of filter

const nums3 = [1, 2, 3, 4, 5];

const oddNums = nums.filter(function(key)
{
    return key % 2 != 0;
});

console.log(oddNums);


const nums4 = [1, 2, 3, 4, 5];

//add all numbers using foreach
let sum = 0;

nums.forEach(function(num)
{
    sum = sum+num;
});

console.log(sum);

