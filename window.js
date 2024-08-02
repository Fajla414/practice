let name = 'Fajla';
function add(num1, num2) {
    // result = num1 + num2;   // result = 24;
    let result = num1 + num2;  // error: not defined
    console.log('result inside ', result);
    function double(num) {
        return num * 2;
    }
    let total = double(result);
    return total;
}


console.log('name outside ', name);
let sum = add(13, 21);
console.log(sum);
// console.log('result outside ', result);  // result = 24;
console.log('result outside ', result); // not defined

