const prompt = require('prompt-sync')();
//Задание 1
function calculateElementsArray(){
    let arr = [0, null, NaN, 0, 1, 2, 4, "str"];
    let even = 0, odd = 0, zero = 0;

    for(let i= 0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && !isNaN(arr[i])){
            if(arr[i] === 0){
                zero += 1;
            }else if(arr[i] % 2 === 0){
                even += 1;
            }else{
                odd += 1;
            }
        }
    }
    console.log(`Количество четных элементов - ${even}`)
    console.log(`Количество нечетных элементов - ${odd}`)
    console.log(`Количество нулей - ${zero}`)

}
calculateElementsArray()

//Задание 2
const getSimleOrCompound = function(number){
    let result;
    let isPrime = true;
    if(number > 1 && number <= 1000){
        for(let i = 2;i<number;i++){
            if(number % i === 0){
                isPrime = false;
            }
        }
        result = isPrime ?`Число ${num} - простое число` : `Число ${num} - составное число`;
    }else if(number < 0 || number > 1000){
        result = 'Данные неверны';
    }
    console.log(result);
}
getSimleOrCompound(345);

//Задание 3
function first(number1) {
    return function (number2){
        return number1 + number2;
    }
};

const first1 = first(1);
const sum = first1(2);
console.log(sum);

//Задание 4
const printNumbers = setInterval(function (number1, number2){
    for(let i = number1; i<number2+1; i++){
        console.log(i);
        if(i===number2){
            clearInterval(printNumbers);
        }
    }
}, 1000, 5, 15);

//Задание 5
const raisingToPower = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    console.log(result);
};
raisingToPower(5, 3);


