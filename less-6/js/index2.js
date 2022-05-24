
// --------Ajax example -----------

let btn=document.getElementById("btn")

btn.addEventListener('click',fetchBtn);

function fetchBtn() {
    console.log('fetch...')

    let xhr=new XMLHttpRequest();

    xhr.onload=function (){
        // console.log(this.responseText)
        let data=this.responseText['userId'];
        console.log(data)
    }



    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    xhr.send()

}