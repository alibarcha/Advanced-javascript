// ============== Ajax in javascript ===================

//  Asyncronus javascript and XML

// function loadData(){

//   const xhttp=new XMLHttpRequest();
  
//   xhttp.onreadystatechange=function(){
//     if(this.readyState==4 && this.status==200){
//       console.log(this.responseText)
//       document.getElementById('demo').innerHTML=this.responseText;
//     }
    
//   }
  
  
//   xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
//   xhttp.send();
  
// };

function loadData(){

 const xhttp=new XMLHttpRequest();
 
xhttp.onreadystatechange=function(){
  if(this.readyState==4 && this.status===200){
    console.log(this.responseText)
    document.getElementById("demo").innerHTML=this.responseText;
    
  }
  else if(this.readyState==4 && this.status===404){
    console.log("file not found")
    document.getElementById("demo").innerHTML="file can not founded.."

  }
}


 xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1",true)
 xhttp.send();
};