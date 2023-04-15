const findTheOldest = function(arr) {
const ageArray = [];
let age;
for (let i=0; i<arr.length; i++){
    if (arr[i].yearOfDeath == undefined) arr[i].yearOfDeath = new Date().getFullYear();
    age = arr[i].yearOfDeath - arr[i].yearOfBirth;
    ageArray.push(age);
}
//loop over the array to find the maximum and its index
let max = 0;
let index;
for (let i=0; i<ageArray.length; i++){
    if (ageArray[i]>max) {
        max = ageArray[i];
        index = i;
    }
}
return arr[index];

};

// Do not edit below this line
module.exports = findTheOldest;
