
// ==== prototype in javascript ========
/*
function person(name,age,address,language){
    this.name=name,
    this.age=age,
    this.address=address,
    this.language=language
}

let father=new person('jon',30,'pakistan','english');

person.prototype.city='pak';
person.prototype.id=3930230
// Object.prototype.my='list'

console.log(father)
console.log(person.prototype.id)
console.log(person.prototype.city)
*/

function employ(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id

}

// functions
employ.prototype.slogan=function (){
    return `this is best company regards ${this.name}`
}




let emp1=new employ('elon musk',30,39393);
console.log(emp1)
console.log(emp1.slogan())


//  second constructor object

function programmer(exp,lan){
    this.exp=exp,
    this.lan=lan
}

let pro1=new programmer(3,'html')
console.log(pro1)

programmer.prototype=Object.create(employ.prototype)

programmer.prototype.constructor =programmer 

let pro2=new programmer(2,'css')
console.log(pro2)