
let message: string = "welcome typescript";
console.log(typeof message);
console.log( message);
document.write(message);
document.write("<br>");
// Array
let data:string[]=[`ali`,`umer`]
data.push('aliza','zani')
data[0]=('hammed')
console.log(data);

document.write("<br>");
let newdata=['ali',10,true,'kashif']
newdata.push('uzair',10,false)
console.log(newdata);
document.write("<br>");

// object
let user={
    name:'fazi',
    age:32,
    address:'lahore'
}
user.name='faizan',
console.log(user)
console.log(user);
document.write("<br>");
 
// interface
interface type{
    name:string,
    age:number,
    address:string
    email:any
}
let newuser:type={
    name:'fazi',
    age:32,
    address:'lahore',
    email:123
}
console.log(newuser);
console.log(newuser);
document.write("<br>");

//Type Aliases is miner semiler interface but aliases create object of data type and use to any wayes
type ty= number|string|undefined;
let a11:ty=32;
let a2:ty="aliza";
let a3:ty=undefined;
console.log(a11);
console.log(a2);
console.log(a3);

// any mean string,number and boolean all accceptable data type
let new2user:any={
    name:'fazi',
    age:"trhrtry",
    address:'lahore'
}
console.log(new2user);
document.write("<br>");

// union type

let a:string|number|boolean="faizan";
a=32;
a=true;

console.log(a);
document.write("<br>");

// function typescript main parameter main us ki datatype ko define kr sakty hain
function cal(x:number, y:string){
  return x+y  
}
console.log(cal(100,"fazi"));
document.write("<br>");
// function typescript main parameter main us ki datatype ko define kr sakty hain sath funtion ko be datatype define kr sakty hain 

function cal2(x:number, y?:number):number{
    return y? x+y :x 
  }
  console.log(cal2(100,150));
  console.log(cal2(100));
  document.write("<br>");

//   class----> cannot declire let,var,etc.. and funtion keyword not declayer in class inside 

class app{
    // name:string;
    name:string;
    constructor(name:string){
        this.name=name;

    }
    getfun=()=>{
        // return console.log(this.name)
        return this.name
    }
}
// let a1= new app("fazi");
let a1=new app("ali");
console.log(a1.getfun());
document.write("<br>");

// inheritance
 class parents{

    name="faizan";
}
class child extends parents{
    get=()=>{
        return this.name
    }
}
let c1=new child();
console.log(c1.get());

// // namespace multiply data in one type

// /// <reference path="util.ts"/>
// namespace util{
 
//    export class ch extends Pa{
   
//         get=()=>{
//             return this.name2
//         }
//     }
// }
//     let c2=new util.ch();
//     console.log(c2.get());


//generics allow to create veraible or data type like: <w=string> and  when pass then use any wayer

function user2<w extends string, t extends string|number>(x:w,y:t):[w,t]{
    return [x,y];

}
console.log(user2("fazi",321));


function user3<w=string>(x:w):w{
    return x;

}
console.log(user3("fazi2"));
console.log(user3({name:"ali", age:32,ads:"LHR"}));
console.log(user3({name:"ali", age:32,ads:"LHR"}.ads));

//An enum is a special "class" that represents a group of constants (unchangeable variables).

//Enums come in two flavors string and numeric. Lets start with numeric.

enum weekday{
    mon,       // if i want start with 0 number then simple name assign if assign value itself then like: mon=1,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun
}
let week:weekday;
console.log("today is ", weekday);
console.log( weekday.sat)

enum days{
    
    Monday="Monday", 
    Tuesday="Tuesday", 
    Wednesday="Wednesday", 
    Thursday="Thursday", 
    Friday=" Friday",
    Saturday=" Saturday",
    Sunday=" Sunday"

}
let day:days;
console.log(days.Monday)
console.log(days.Tuesday)
console.log(days.Wednesday)
console.log(days.Thursday)
console.log(days.Friday)
console.log(days.Saturday)
console.log(days.Sunday)

//symbol this is a primivite type and  is genreated always unique id and declore inside is [name]

// var s1=Symbol();
// class so{
//     [s1](){
//     return "this is a symbol";
//     }
// }
// let s= new so();
// // console.log(s[s1]());

//Tuples is advance array like defind data type 

// let touple:number[] | string[] =[32,"ali"]    ----> this make genrated error this error solved used touple
let touple:[number,string]=[32,"ali"]
touple.push("aliza")
touple.push(32)
touple.pop()
console.log(touple)

//Casting is the process of overriding a type.
let x:unknown="fazi akram";
console.log(x as string);
console.log((x as string).length)
console.log((<string>x).length)
