// ===== objects in js =====

/*
let car={
    name:'ODI',
    color:'silver',
    speed:500,
    recommend:true,
    price:500000,
    title:'toyota',
    location:['pakistan','india','USA','iran']
}

console.log(car ,typeof car)

console.log(car.name)
console.log(car.speed)
console.log(car.recommend)
console.log(car.title)
console.log(car.location)
console.log(car.location[0])
console.log(car.location[1])
console.log(car.location[2])
*/

//  --------oop object constructor ---------


let car=function(name,color,title,price){
    this.name=name,
    this.color=color,
    this.title=title,
    this.price=price
}

// --car1---
let car1=new car('JLI','red','Honda',300000)

// --car2---
let car2=new car('OD','silver','toyota',5000000)

console.log(car1)

console.log(car2)
console.log(car2.name)
console.log(car2.color)
console.log(car2.title)
console.log(car2.price)