// ===========Error Handeling ==========

/*
let str=undefined;

if(str==undefined){
  throw new Error("this is error in condition")
  // console.log('error')
}
else{
  console.log("true condition..")
}

try {
  functio();
  nbjkhbhbb
  i98u8
} catch (error) {

  console.log("Are you ok")
  console.log(error )
}finally{
  console.log("finally we are running")
}
*/


// ====== generators in javascript ====

function* numbersGen(){
   
  let i=0;

  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  while(true){
    yield( i++);
  }
}


const gen=numbersGen()
console.log(gen.next().value)
console.log(gen.next().done)
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())


// ============= Maps in javascript ===============

let myMap=new Map();
let key1='str1';
let key2='str2';
let key3='str3';

myMap.set(key1,'this is string 1');
myMap.set(key2,'this is string 2');
myMap.set(key3,'this is string 3');



console.log(myMap,typeof myMap)