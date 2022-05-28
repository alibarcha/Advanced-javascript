// =========== promises in javascript ============

// stages: pending,fullfill,rejected

 /*

let prom=new Promise(function(resolve,reject){

});
*/

let complete=true;
let prom=new Promise(function(resolve,reject){

  if(complete){
    resolve("I am success..")
  }
  else{
    reject("I am rejected..")

  }
})
// then function
prom.then(function(){
  console.log("hello this is then function...")
})

// catch function
prom.catch(function(){
  console.log("this is catch function ...")
})

console.log(prom,typeof prom)