// =============== fetch Api in javascript ================

let btn=document.getElementById("btn")

btn.addEventListener("click",loadData)

function loadData(){

  
  fetch('./text.txt').then(function(response){
    return response.text()
    
  }).then(function(result){
    
    document.body.innerHTML=result
    
    console.log(result)
    
  }).catch(function(error){
    console.log("error")
    console.log(error)
  })
}






/*
fetch('./text.txt').then(function(response){
  return response.text()
}).then(function(result){
  console.log(result)
}).catch(function(error){
  console.log("Error here..")
  console.log(error)
})
*/
 
/*
// using Arrow Function
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
  return response.json()
}).then((result)=>{

  console.log(result)

  for (const key in result) {
    console.log(key)
    // name
    // document.write(`${result[key].name} <br>`)
    // city
    // document.write(`${result[key].address.city} <br>`)

    document.write(`phone:: ${result[key].phone}<br>`)
  }

}).catch(function(){
  console.log('cant fetch data')
})

*/

// ========== insert  ,update,Deleate ======

// fetch(file,{
//   method : "POST",  'PUT'  "DELETE", "GET"
//   body:data form data/json data /text
//   header:{
//     'content-type': 'appliocation/json'
        // from form data
        // 'content-type' : 'application/x-www-form-urlencoded'
//   }
// });

/*
var obj={
  title: 'foo',
  body: 'bar',
  userId: 1
}

fetch('url',{
  method  :'POST',
  body: JSON.stringify(obj),
  Header: {
    'Content-type': 'applicatio/json'
  },
}).then(function(response){
  return response.JSON()
}).then(function(json){
  console.log(json)
})
*/




// ============Async Await method in javascript ===================

/*
async function test(){
 await  console.log("first console")

 setTimeout(() => {
   
   console.log("second console")
 }, 3000);

  console.log("thired console")
  
}

test()
// console.log(test())*/ 

async function test(){

  console.log("console : 2")
 await console.log("console : 3")
  console.log("console : 4")      // console 4 wait here
 

}

console.log("console : 1 ")

test()

  console.log("console : last ...")
