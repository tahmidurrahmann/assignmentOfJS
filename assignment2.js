// 1
function cubeNumber(number) {
    if(typeof number !== "number"){
        return "please provide a number";
    }
    const cube = 3;
    const result = Math.pow(number,cube);
    return result;
}

//2
function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "please provide two strings"
    }
    else{
       if(string1.includes(string2)){
        return true;
       }
       return false;
    } 
}

// 3
function sortMaker(arr) {
    let firstElement = arr[0];
    let secondElement = arr[1];
    let array = [];
    if(firstElement < 0 || secondElement < 0){
        return "Invalid Input"
    }
    else if(firstElement === secondElement){
        return "equal";
    }
    else{
       if(firstElement > secondElement){
         array.push(firstElement);
         array.push(secondElement);
       }
       else{
        if(secondElement > firstElement){
            array.push(secondElement);
            array.push(firstElement);
        }
       }
    }
    return array;
}


// 4
function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const result = street+','+house+','+society;
    return result;
}


// 5
function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "please provide an array with numbers"
    }
    let sum = 0;
    for(let i = 0; i < changeArray.length; i++){
        const element = changeArray[i];
        sum += element;
    }
    if(sum >= totalDue){
        return true;
    }
    else{
        if(sum < totalDue){
            return false;
        }
    }
}