const sumAll = function(startNum, endNum) {
    let sum = 0;
    if (Number.isInteger(startNum) && Number.isInteger(endNum)  && startNum>=0 && endNum>=0){
        if (startNum>endNum) {
            for (let i=startNum;i>=endNum;i--){
                sum = sum+i;
            }
        }else{
            for (let i=startNum;i<=endNum;i++){
                sum = sum+i;
            }
        }
    }else{
        sum = "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
