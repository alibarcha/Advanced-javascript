// ============= classes and objects ==============
// man class
class man{
    constructor(fname,lname,age,address){
        this.firstName=fname,
        this.lastName=lname,
        this.age=age,
        this.address=address

    }
        // methods and function
        fullname=function (x,y){
            return `fullname is ${x + y}`
        }

        dob(){
            return 2022 - this.age;
        }
        static add(a,b){
            return a+b;
        }
}

/*
// --man 1---
let man1=new man('elon','william',19,'pak');
console.log(man1)

console.log(man1.firstName)
console.log(man1.lastName)
console.log(man1.age)
console.log(man1.fullname('steve','job'))
*/
// --man 2---

let man2=new man('elon','musk',19,"USA")
console.log(man2)


// =============inherite class =============

class programmer extends man{
    constructor(fname,lname,age,address,  lan,exp,salary){
       super(fname,lname,age,address)
        this.language=lan,
        this.experience=exp,
        this.salary=salary
    }
}

// --programmer 1

let pro1=new programmer('willaim','son',50,'UAE', 'html',5,30000)
console.log(pro1)

console.log(pro1.firstName)
console.log(pro1.lastName)
console.log(pro1.language)
console.log(pro1.experience)

console.log(pro1.fullname('elon','musk'))


// --programmer 2 ---

let pro2=new programmer('json','Roy',30,'USA','javascript developer',4,3000000000)

console.log(pro2)

console.log(pro2.firstName)
console.log(pro2.fullname('json','roy'))
console.log(programmer.add(2,3))



