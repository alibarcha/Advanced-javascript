
// ============ promises in javascript ===============

/*
setTimeout(function timer() {
    console.log("time out function calling..")

    document.getElementById("para").innerHTML="time out function calling.."
}, 3000);

*/


let btn=document.getElementById("btn")
btn.addEventListener('click',data)

function data(){

  const xhr=new XMLHttpRequest();

  

  xhr.onload=function (){
    // console.log( this.responseText)
    if(xhr.status==200){
        let data=this.responseText
        console.log(data, typeof data)
    }
    else{
      document.getElementById("para").innerHTML="someone is error"
      console.log("someone is error")
    }


  }

  xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
  xhr.send();
}


// promise
/*
promise: resolve()
          reject()
          pending()
          */

    // example

    let func1=function (){
      return new Promise(function(resolve,reject){

        setTimeout(() => {
          const error=true;
          if(!error){
            console.log('your promise resolved..')
            resolve()
          }
          else{
            console.log('your promise rejected..')
            reject('sorry not founed')
          }
          
        }, 3000);

      })

    }

    func1().then(function (){
      console.log('thanks for resolving')
   }).catch(function(){
     console.log('very bad boy')

   })