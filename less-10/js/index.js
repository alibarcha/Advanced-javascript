

// ========= Error handling in javascript =============

// method for error handling is try catch method


try{
  // javascript code goes here..

  let json=`{"name":"william","age":40,"address":"USA"}`;

  let user=JSON.parse(json)

  console.log(user.name)
  console.log(user.age)

  

}catch(error){

  // console.log("error custom ")
  // console.log(error)

  // console.log(error.name)
  // console.log(error.message)
  // console.log(error.stack)

  // if(error instanceof SyntaxError){
  //   console.log("SyntaxError is occured")
    
  // }

  console.log("json error"+ error)

 

}
finally{
  console.log("finally success")
}



