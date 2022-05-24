// =============== Ajax in javascript =============

//  asynchronus javascript and XML (xml is formet of data like a JSON)

// get btn
let fetchBtn=document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler);
// build function

function buttonClickHandler(){
   console.log("call function")
  

  // xhr
  const xhr=new XMLHttpRequest();

  // xhr.onprogress=function(){
  //   console.log('onprogress')
  // }
  xhr.onload = function(){
    console.log(this.responseText)
  
  }

  // open object
  xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

  xhr.send();
  
 

}



