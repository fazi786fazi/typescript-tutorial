var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "welcome typescript";
console.log(typeof message);
console.log(message);
document.write(message);
document.write("<br>");
// Array
var data = ["ali", "umer"];
data.push('aliza', 'zani');
data[0] = ('hammed');
console.log(data);
document.write("<br>");
var newdata = ['ali', 10, true, 'kashif'];
newdata.push('uzair', 10, false);
console.log(newdata);
document.write("<br>");
// object
var user = {
    name: 'fazi',
    age: 32,
    address: 'lahore'
};
user.name = 'faizan',
    console.log(user);
console.log(user);
document.write("<br>");
var newuser = {
    name: 'fazi',
    age: 32,
    address: 'lahore',
    email: 123
};
console.log(newuser);
console.log(newuser);
document.write("<br>");
var a11 = 32;
var a2 = "aliza";
var a3 = undefined;
console.log(a11);
console.log(a2);
console.log(a3);
// any mean string,number and boolean all accceptable data type
var new2user = {
    name: 'fazi',
    age: "trhrtry",
    address: 'lahore'
};
console.log(new2user);
document.write("<br>");
// union type
var a = "faizan";
a = 32;
a = true;
console.log(a);
document.write("<br>");
// function typescript main parameter main us ki datatype ko define kr sakty hain
function cal(x, y) {
    return x + y;
}
console.log(cal(100, "fazi"));
document.write("<br>");
// function typescript main parameter main us ki datatype ko define kr sakty hain sath funtion ko be datatype define kr sakty hain 
function cal2(x, y) {
    return y ? x + y : x;
}
console.log(cal2(100, 150));
console.log(cal2(100));
document.write("<br>");
//   class----> cannot declire let,var,etc.. and funtion keyword not declayer in class inside 
var app = /** @class */ (function () {
    function app(name) {
        var _this = this;
        this.getfun = function () {
            // return console.log(this.name)
            return _this.name;
        };
        this.name = name;
    }
    return app;
}());
// let a1= new app("fazi");
var a1 = new app("ali");
console.log(a1.getfun());
document.write("<br>");
// inheritance
var parents = /** @class */ (function () {
    function parents() {
        this.name = "faizan";
    }
    return parents;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.get = function () {
            return _this.name;
        };
        return _this;
    }
    return child;
}(parents));
var c1 = new child();
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
function user2(x, y) {
    return [x, y];
}
console.log(user2("fazi", 321));
function user3(x) {
    return x;
}
console.log(user3("fazi2"));
console.log(user3({ name: "ali", age: 32, ads: "LHR" }));
console.log(user3({ name: "ali", age: 32, ads: "LHR" }.ads));
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric. Lets start with numeric.
var weekday;
(function (weekday) {
    weekday[weekday["mon"] = 0] = "mon";
    weekday[weekday["tue"] = 1] = "tue";
    weekday[weekday["wed"] = 2] = "wed";
    weekday[weekday["thu"] = 3] = "thu";
    weekday[weekday["fri"] = 4] = "fri";
    weekday[weekday["sat"] = 5] = "sat";
    weekday[weekday["sun"] = 6] = "sun";
})(weekday || (weekday = {}));
var week;
console.log("today is ", weekday);
console.log(weekday.sat);
var days;
(function (days) {
    days["Monday"] = "Monday";
    days["Tuesday"] = "Tuesday";
    days["Wednesday"] = "Wednesday";
    days["Thursday"] = "Thursday";
    days["Friday"] = " Friday";
    days["Saturday"] = " Saturday";
    days["Sunday"] = " Sunday";
})(days || (days = {}));
var day;
console.log(days.Monday);
console.log(days.Tuesday);
console.log(days.Wednesday);
console.log(days.Thursday);
console.log(days.Friday);
console.log(days.Saturday);
console.log(days.Sunday);
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
var touple = [32, "ali"];
touple.push("aliza");
touple.push(32);
touple.pop();
console.log(touple);
//Casting is the process of overriding a type.
var x = "fazi akram";
console.log(x);
console.log(x.length);
console.log(x.length);
