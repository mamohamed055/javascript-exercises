const removeFromArray = function() {
    let arr = arguments[0];
    let lenArr = arguments[0].length;
    let lenArgs = arguments.length;

    for (i=1; i<lenArgs; i++){
        for (let j=0; j<lenArr; j++){
            if (arr[j] === arguments[i]){
                arr.splice(j,1);
            }
            else {
                continue;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
