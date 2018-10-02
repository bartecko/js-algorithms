//algorithm for finding a min and max in a array (es6 style ;) )
function getMinMax(arr){
    min = findMin(arr);
    max = findMax(arr);
    console.log(min,max);
    return [min,max];
}
getMinMax([1,2,5,10]);

function findMin(array){
    var sortedMin = [];
    sortedMin = array.sort((a, b) => a > b ? 1 : -1);
    var min = sortedMin[0];
    return min;
}

function findMax(array){
    var sortedMax = [];
    sortedMax = array.sort((a, b) => a < b ? 1 : -1);
    var max = sortedMax[0];
    return max;
}
