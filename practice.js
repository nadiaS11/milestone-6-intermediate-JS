const multiply = (a, b, c) => a * b * c;
console.log(multiply(4, 2, 3));
console.log(`${multiply(2, 5, 4)} \n I am a Web Developer \n i love coding`);
const add = (a = 0, b = 0, c = 0) => a * b * c;
console.log(add(4, 2));

// practice problem 2
const returnEvenNames = (arr) => {
  let evenNames = [];

  for (names of arr) {
    if (names.length % 2 == 0) {
      evenNames.push(names);
    }
  }
  return evenNames;
};
const friends = returnEvenNames([
  "Ramissa",
  "Atikka",
  "Saraff",
  "Nadiaa",
  "Sultana",
]);
console.log(friends);
const sqrAvg = (arrNumbers)=>{
    let sum=0;
    for(let number of arrNumbers){
        numberSqr=Math.pow(number,2)
        sum+=numberSqr        
    } return sum/arrNumbers.length
}
console.log(sqrAvg([2,4,2,3,1]));

// practice 3
const arrMax = (arr1, arr2)=>{
    const newArray = [...arr1,...arr2, 50]
    return `${Math.max(...newArray)} is from  ${newArray}`
}
const arrayFirst =[2,546,6,5,8,564,6523]
const arraySecond =[2254,65,5638,23]
// console.log(arrMax(arrayFirst,arraySecond))


function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);
