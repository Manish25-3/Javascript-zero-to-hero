var m =10;
var n =20;

//arithmatic operations
console.log("Arithmatic operations :");
console.log(`${m} + ${n} = `+(m+n));
console.log(`${m} - ${n} = `+(m-n));
console.log(`${m} * ${n} = `+(m*n));
console.log(`${m} / ${n} = `+(m/n));
console.log(`${m} % ${n} = `+(m%n)); 


//Assignment operators
console.log("\nAssignment operators :");
console.log(`${m} + ${n} = `+(m+=n));
console.log(`${m} - ${n} = `+(m-=n));
console.log(`${m} * ${n} = `+(m*=n));
console.log(`${m} / ${n} = `+(m/=n));
console.log(`${m} % ${n} = `+(m%=n));

m=10
n=20
//Relational operators
console.log("\nRelational operators :");
console.log(`${m} == ${n} = `+(m==n));
console.log(`${m} != ${n} = `+(m!=n));
console.log(`${m} < ${n} = `+(m<n));
console.log(`${m} > ${n} = `+(m>n));
console.log(`${m} <= ${n} = `+(m<=n));
console.log(`${m} >= ${n} = `+(m>=n));
console.log(`${m} === ${n} = `+(m===n));
console.log(`${m} !== ${n} = `+(m!==n));
 
//Logical operators
console.log("\nLogical operators :");
console.log(`${m}<${n} && ${m}>=${n} = `+((m<n)&&(m>=n)));
console.log(`${m}<${n} || ${m}!=${n} = `+((m<n)||(m!=n)));
console.log(`!${n} = `+(!n));

/*
OUTPUT :

C:\Users\ASUS\Desktop\Javascript - LetsUpgrade>node Assignment-1.js
Arithmatic operations :
10 + 20 = 30
10 - 20 = -10
10 * 20 = 200
10 / 20 = 0.5
10 % 20 = 10

Assignment operators :
10 + 20 = 30
30 - 20 = 10
10 * 20 = 200
200 / 20 = 10
10 % 20 = 10

Relational operators :
10 == 20 = false
10 != 20 = true
10 < 20 = true
10 > 20 = false
10 <= 20 = true
10 >= 20 = false
10 === 20 = false
10 !== 20 = true

Logical operators :
10<20 && 10>=20 = false
10<20 || 10!=20 = true
!20 = false
*/