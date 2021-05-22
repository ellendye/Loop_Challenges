//1. Print odds 1-20
for (var i = 1; i <= 20; i++){
    if ( i % 2 != 0){
        console.log(i)
    }
}

//2. Decreasing multiples of 3 - write a code that will console.log all of the values taht are evenly divisible by 3 from 100 to 0
for (var i = 100; i > 0; i--){
    if (i % 3 == 0){
        console.log(i)
    }
}

//3. Print the sequence. Using a loop, write a code that will console.log the values in this sequence
for (var i = 4; i > -4; i-=1.5){
    console.log(i)
}

//4. Sigma - write a code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result. Should get back 5050 at the end.

var sum = 0;
for (var i = 0; i <= 100; i++){
    sum+=i;
}
console.log(sum)

//5. Factorial - write code that will multiply all values from 1-12 onto some variable product and console.log the result. Should get back 479001600 at the end.

var product = 1;
for (var i = 1; i <= 12; i++){
    product*=i;
}
console.log(product); 
