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
// namespace multiply data in one type
/// <reference path="./util.ts" />
var util;
(function (util) {
    var childs = /** @class */ (function (_super) {
        __extends(childs, _super);
        function childs() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.get = function () {
                return _this.name2;
            };
            return _this;
        }
        return childs;
    }(parents));
    util.childs = childs;
})(util || (util = {}));
var c2 = new util.childs();
console.log(c2.get());
