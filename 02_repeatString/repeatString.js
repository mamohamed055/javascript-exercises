const repeatString = function(string, num) {
    addString = string;
    if (num == 0){
        return '';
    }
    else if (num<0){
        return 'ERROR';
    }
    for (let i=0; i<num-1; i++)
    {
        string += addString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
