const accountId =123456;
let accountEmail ="xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Pokhara"
let accountDistrict;


// accountId =22222; this (accountId) is constant so we can't change 

accountEmail= "sand@gail.com";
accountPassword ="abcde";
accountCity = "KTM";

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity, accountDistrict]);
console.table({
    accountEmail: typeof accountEmail,
     accountId:  typeof accountId,
     accountPassword: typeof accountPassword,
     accountCity: typeof accountCity , accountDistrict:typeof accountDistrict});

console.error("constant can't change ");




// try to use let and const instead of  using var 


 
 //String 
 let firstName="Sandeep"
 let lastName ="Sharma"

 // number 
  let age=21;

  // boolean 
  let online = true;

//   undefined
let k;


// null
let country = "";
 
// symbol for unique 



//OBJECT

console.table([typeof online, typeof k , typeof firstName, typeof lastName, typeof age , typeof country, ]);
console.log(eval("3"+"5"));




