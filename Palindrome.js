//test the number is odd or even 
function getOdd(num) {
    if (num % 2 == 0) {
        return num + " is Even";
    }
    else if (num % 2 != 0) {
        return num + " is Odd";
    }
    else {
        return num + " is niether odd nor even";
    }
}
function getPalindromity(values) {
    for (var i = 0; i < values.length; i++) {
        // console.log("Value : "+values[i]);
        var countEvens = 0;
        for (var j = values[i]; j >= 1; j--) {
            // check palindromity right here
            if (values[i] % j == 0) {
                //it is even number
                countEvens += 1;
                // console.log("Even in "+j+" denominator number");
            }
        }
        if (countEvens <= 2) {
            // which is palindrome, right. Because the number divisible 
            // by 1 and itself we call it palindrome. that is why I use the number 2
            console.log(values[i] + " is Palindrome");
        }
        // console.log("Number "+values[i]+" has "+countEvens+" Dividers");
    }
}
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]; // list of array elements
// num.forEach(n=>{
//     console.log(getOdd(n));
// });
getPalindromity(num);
