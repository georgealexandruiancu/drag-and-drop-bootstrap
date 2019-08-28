// 1. Verify a prime number?

function primeNumber(num){
    var divisor = 2;

    while(num > divisor){
        if(num % divisor == 0){

            return false;
        }else{
            divisor++;
        }
    }
    // console.log("yes");
    return true;


}
console.log("Find all prime factors of a number?");
var ans = primeNumber(137);
console.log(ans);
console.log("-------------------------------");


// 2. Find all prime factors of a number?

function findPrimeFactors(num){
    var divisor = 2;
    var factors = [];

    while(num > 2){
        if(num % divisor == 0){
            factors.push(divisor);
            num = num / divisor;
        }else{
            divisor++;
        }
    }
    return factors;
}
console.log("Find all prime factors of a number?");
var ans2 = findPrimeFactors(546);
console.log(ans2);
console.log("-------------------------------");


// 3. Get nth Fibonacci number?
// non-recursive
function fiboNumber(num){
    var fib = [0, 1];
    if(num <= 2) return 1;

    for(let i=2;i<=num;i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib[num];
}

var ans3 = fiboNumber(10);
console.log("Fibonacci number non-recursive (complexity: o(n))");
console.log(ans3);
console.log("-------------------------------");
// recursive
function fiboNumberRecursive(num){
    if(num<=1){
        return num;
    }else{
        return fiboNumberRecursive(num-1) + fiboNumberRecursive(num-2);
    }
}
var ans4 = fiboNumber(12);
console.log("Fibonacci number recursive (complexity: 2^n))");
console.log(ans4);
console.log("-------------------------------");

// 4. Find the greatest common divisor of two numbers?
function cmmdc(num1, num2){
    var divisor = 2;
    var greatestDivisor = 1;

    if(num1 < 2 || num2 < 2){
        return 1;
    }

    while(num1 >= divisor && num2 >=divisor){
        if(num1 %divisor == 0 && num2%divisor == 0){
            greatestDivisor = divisor;
        }
        divisor++ ;
    }
    return greatestDivisor;

}
var ans5 = cmmdc(12, 144);
console.log("Find the greatest common divisor of two numbers?");
console.log(ans5);
console.log("-------------------------------");

// 5. Remove duplicate members from an array?
function removeDuplicateArr( arr ){
    var checkArr = [];
    var exist = {};
    var element;
    for(let i=0 ; i < arr.length; i++){
        element = arr[i];
        if(!exist[element]){
            checkArr.push(element);
            exist[element] = true;
        }
    }
    return checkArr;
}
var ans6 = removeDuplicateArr([1, 1, 3, 3, 5, 8, 10, 10]);
console.log("Remove duplicate members from an array?");
console.log(ans6);
console.log("-------------------------------");

// 6. Merge two sorted array?

function mergeSortedArrays(arr1, arr2){
    var merged = [];
    var arr1Element = arr1[0];
    var arr2Element = arr2[0];
    var i = 1, j = 1;

    if(arr1.length == 0){
        return 0;
    }
    if(arr2.length == 0){
        return 0;
    }

    while(arr1Element || arr2Element){
        if((arr1Element && !arr2Element) || arr1Element < arr2Element){
            merged.push(arr1Element);
            arr1Element = arr1[i++];
        }else{
            merged.push(arr2Element);
            arr2Element = arr2[j++];
        }
    }
    return merged;

}

var ans7 = mergeSortedArrays([1, 2, 3, 5], [1, 5, 8, 10, 10]);
console.log(" Merge two sorted array?");
console.log(ans7);
console.log("-------------------------------");

//7. Swap two numbers without using a temp variable?

// a = 3
// b = 5
// b = 2;
// a = 5;
// b = 5 - 3 = 2
function swapWithoutTemp(a, b){

    b = b - a;
    a = a + b;
    b = a - b;
    console.log("swap a:" + a + "b: " + b);

}
console.log(" Swap two numbers without using a temp variable?");
swapWithoutTemp(3, 5);
console.log("-------------------------------");

//8. Reverse a string in JavaScript?
function reverseString(str){
    var strReverse = "";
    for (let i = str.length-1 ; i >= 0 ; --i){
        strReverse = strReverse + str[i] ;
    }
    return strReverse;
}
var ans8 = reverseString("reverse");
console.log(" Reverse a string in JavaScript?");
console.log(ans8);
console.log("-------------------------------");

//9. Reverse words in a sentence?

function reverseSentence(sentence) {
    let arr = sentence.split(" ");
    let reverseSentence = "";

    for (let i=arr.length-1; i >= 0; i--) {
       
        reverseSentence += arr[i] + " ";
    }
    return reverseSentence;
}
var ans9 = reverseSentence("Ana are mere");
console.log("9. Reverse words in a sentence?");
console.log(ans9);
console.log("-------------------------------");


//10. Reverse words in place?

function reverseWordsSentence(sentence){
    let arr = sentence.split(" ");
    let reverseSentence = "";

    for(let i=0;i<arr.length;i++){
        let strReverse = "";
        for(let j=arr[i].length-1; j>=0; j--){
            strReverse += arr[i][j];
        }
        reverseSentence += strReverse + " ";
    }
    return reverseSentence;
}
var ans10 = reverseWordsSentence("Ana are mere");
console.log("10. Reverse words in place?");
console.log(ans10);
console.log("-------------------------------");


//11. Find the first non repeating char in a string?
function checkRepetingChar(str){
    let exist = {};
    for (let i=0;i<str.length;i++){
        let element = str[i];
        if(exist[element]){
           exist[element]++;
        }else{
            exist[element] = 1;
        }
    }
  
    // - > sol care merge
    for(let j in exist){
        if(exist[j] == 1){
            return j;
        }
    }

    
}
var ans11 = checkRepetingChar("ana are mere");
console.log("11. Find the first non repeating char in a string?");
console.log(ans11);
console.log("-------------------------------");


//12. Remove duplicate characters from a sting?

function rmDuplicateChar(str) {
    let exist = {};
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        if (exist[element]) {
            exist[element]++;
        } else {
            exist[element] = 1;
        }
    }

    // - > sol care merge
    for (let j in exist) {
        if (exist[j] == 1) {
            newString += j;
        }
    }
    return newString;

}
var ans12 = rmDuplicateChar("Ana are mereeeeeeeee");
console.log("12. Remove duplicate characters from a sting?");
console.log(ans12);
console.log("-------------------------------");

//13. Verify a word as palindrome?



function palindromeWord(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
var ans13 = palindromeWord("fffddfff");
console.log("13. Verify a word as palindrome?");
console.log(ans13);
console.log("-------------------------------");

//14. Generate random between 5 to 7 by using defined function.
console.log("14 Generate random between 5 to 7 by using defined function.");
console.log( 5 + Math.random() * 5 / 5 * 2 );
console.log("-------------------------------");


//15. Find missing number from unsorted array of integers.
function findMissingNumber(arr){
    let sum = 0;
    let sumExpected = (arr.length+1)*(arr.length+2)/2;

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sumExpected - sum;
}
var ans15 = findMissingNumber([1, 2, 4, 5, 6]);
console.log("15. Find missing number from unsorted array of integers.");
console.log(ans15);
console.log("-------------------------------");

//16. Check whether any two numbers in an array sums to a given number?
function findSum(arr, sum){
    for(let i=0 ;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == sum){
                return true
            }
        }
    }
    return false;
}

var ans16 = findSum([1, 2, 4, 5, 6], 44);
console.log("16. Check whether any two numbers in an array sums to a given number?");
console.log(ans16);
console.log("-------------------------------");

//17. Find the largest sum of any two elements?
function maxSum(arr){
    let minbig = arr[0];
    let maxbig = arr[1];

    if(arr[0] > arr[1]){
        minbig = arr[1];
        maxbig = arr[0];
    }

    for(let i=2;i<arr.length;i++){
        if(arr[i] > maxbig){
            minbig = maxbig;
            maxbig = arr[i];
        }else if(arr[i] > minbig){
            minbig = arr[i];
        }
    }
    return minbig + maxbig;
}
var ans17 = maxSum([1, 44, 4, 5, 6]);
console.log("17. Find the largest sum of any two elements?");
console.log(ans17);
console.log("-------------------------------");

//18. Total number of zeros from 1 upto n?
function numberZero(n){
    let count = 0;
    for(let i=1; i<=n;i++){
        let copyI = i;
        while(copyI > 0){
            if (copyI % 10 == 0) {
                count++;
            }
            copyI = copyI / 10;
        }
       
    }
    return count;
}
var ans18 = numberZero(100);
console.log("18. Total number of zeros from 1 upto n?");
console.log(ans18);
console.log("-------------------------------");

//19. Match substring of a sting?
function matchSubstring(substr, str){
    let j = 0;
    for(let i=0;i<str.length;i++){
        let index = 0;
        if(str[i] == substr[j]){
            j++;
        }else{
            j=0;
        }

        if(j==0){
            index = j;
        }else if(j == substr.length){
            return "contine";
        }
    }
    return "nu contine";
}
var ans19 = matchSubstring("Ana", "Ana are mere");
console.log("19. Match substring of a sting?");
console.log(ans19);
console.log("-------------------------------");


//20. Create all permutation of a string?
function permutationWord(word){
    var arr = word.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [word];

    for (var i = 0; i < len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutationWord(rest.join(''));

        for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}
var ans20 = permutationWord("asdd");
console.log("20.Create all permutation of a string?");
console.log(ans20);
console.log("-------------------------------");


//21. Convert in ASCII code upperCase char.
console.log("21. Convert in ASCII code upperCase char.");
var cuvant = "D";
var cuvantnou = cuvant.charCodeAt() + 32;
console.log(String.fromCharCode(cuvantnou));