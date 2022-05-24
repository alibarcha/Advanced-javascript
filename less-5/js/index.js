// ======= Asynchronus programming ==========


// function myfun(){
//     console.log("function here ................")
// }

console.log('synchronus .....')

// asynchronus example

setInterval(function(){
    console.log("function ..........")
},3000)


console.log("othere function..")


// ----------second example --------
/*
let para=document.getElementById("para");
setInterval(function(){
    para.innerHTML += "hell";
   
},1000); */



setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date()
  d.setHours(23)
  d.setMinutes(33)

//   console.log(d)
  
 let head=document.getElementById("head")
  document.getElementById("para").innerHTML=
  d.getHours() + "" +
  d.getMinutes() + "" 
 head.innerHTML= d.getSeconds();
}


let date=new Date()
console.log(date.setHours(8))
console.log(date.setMinutes(20))
console.log(date.setMilliseconds(40))


console.log(date)
console.log(date.getHours())

// exp
setTimeout(()=>{
    for(let i=0;i<=50;i++){
      console.log("looping" + i)
    }
},2000)

console.log("After looping............")
