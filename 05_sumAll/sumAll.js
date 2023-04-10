const sumAll = function() {
let a = arguments[0];
let b = arguments[1];
let min ;
let max ;

if (a<0 || b<0){
    return 'ERROR';
}
else if (typeof(a)!= 'number'|| typeof(b)!= 'number'){
    return 'ERROR';
}

if (a>=b){
    max = a;
    min = b;
}
else if (b>a){
    max = b;
    min = a;
}

let sum = min;
let add = min+1;
let delta = max - min;
let i = 0;
while (i<delta){
    sum+=add;
    i++;
    add++;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
