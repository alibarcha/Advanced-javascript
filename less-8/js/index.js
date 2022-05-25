
// ==============  fetch Api in javascript ==============

// get elements

let fetchBtn=document.getElementById("fetchBtn");
let box=document.getElementById("box");

fetchBtn.addEventListener('click',getdata)

/*
// make a function
      function getdata(){
        // url='https://jsonplaceholder.typicode.com/todos/1';
        url='https://jsonplaceholder.typicode.com/todos/1';
        fetch(url).then((response)=>{
          console.log('inside first then')
           return response.text();
        }).then((data)=>{
          console.log('inside second then')
          console.log(data)
          
          box.innerHTML=`${data}`

        })
      }

      // call function
      console.log("before running getdata()")
      // getdata();
      console.log('After running getdata()')
      */

      // ------------secone example-----------

      function getdata(){
        // user url
        url='https://jsonplaceholder.typicode.com/users';

        fetch(url).then((response)=>{

          // in the form of txt
          return response.text()

          // in the form of json
          // return response.json()
        }).then((data)=>{

          box.innerHTML=data
          console.log(data,typeof data)

        })


      }