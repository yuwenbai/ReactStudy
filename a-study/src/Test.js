// function Foo() {
//     this[200] = 'test-200';
//     this[1] = 'test-1';
//     this[100] = 'test-100';
//     this['B'] = 'bar-B';
//     this[50] = 'test-50';
//     this[9] = 'test-9';
//     this[8] = 'test-8';
//     this[3] = 'test-3';
//     this[5] = 'test-5';
//     this['D'] = 'bar-D';
//     this['C'] = 'bar-C';
//   }
//   var bar = new Foo();
  

function Foo(property_num, element_num) {
    //添加可索引属性
    for (let i = 0; i < element_num; i++) {
      this[i] = `element${i}`;
    }
    //添加常规属性
    for (let i = 0; i < property_num; i++) {
      let ppt = `property${i}`;
      this[ppt] = ppt;
    }
  }
  var bar = new Foo(10, 10);
    for (let key in bar) {
    console.log(`index:${key}  value:${bar[key]}`);
  }

//   var funcs = [];
// for (var i = 0; i < 3; i++) {
//     funcs[i] = function () {
//         console.log(i);
//     };
// }
// funcs[0](); // 3
// literals 文字
// 注意在这个例子中 literals 的第一个元素和最后一个元素都是空字符串
// function message(literals, ...values) {
// 	let result = '';

// 	for (let i = 0; i < values.length; i++) {
// 		result += literals[i];
// 		result += values[i];
// 	}

// 	result += literals[literals.length - 1];

// 	return result;
// }
// function message(literals, ...values) {
// 	let result = literals.reduce((prev, next, i) => {
// 	    let value = values[i - 1];
// 	    return prev + value + next;
// 	});

// 	return result;
// }
console.log('string template')
// let x = 'Hi', y = 'Kevin';
// var res = message`${x}, I am ${y}`;
// console.log(res);

// oneLine 第二版
// function oneLine(template, ...expressions) {
//     let result = template.reduce((prev, next, i) => {
//         let expression = expressions[i - 1];
//         return prev + expression + next;
//     });

//     result = result.replace(/(\n\s*)/g, " ");
//     result = result.trim();

//     return result;
// }

// let message = oneLine`
//   Preserve eg sentences.  Double
//   spaces within input lines.
// `;
// console.log(message); // Hi, Daisy! I am Kevin.
// let nums = (...nums) => nums;
// console.log(nums('1,2,3','2,3,3'))
// var Foo1 = function()  {};
// var foo = new Foo1(); // TypeError: Foo is not a constructor

// var obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function() {
//       console.log( this.i, this)
//     }
//   }
//   obj.b();
//   // undefined Window
//   obj.c();

// var s = Symbol('soo');
// console.log(typeof s); // "symbol"
// console.log(s); // "symbol"
// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');

// obj[a] = 'Hello';
// obj[b] = 'World';

// var objectSymbols = Object.getOwnPropertySymbols(obj);

// console.log(obj);
// console.log(obj[a]);

// var s = Symbol()vg
// console.log(s);
// var s = Symbol()
// console.log(s);
// var colors = ["red", "green", "blue"];

// for (let index of colors.keys()) {
//     console.log(index);
// }
// // 0
// // 1
// // 2

// for (let color of colors.values()) {
//     console.log(color);
// }

// // red
// // green
// // blue

// for (let item of colors.entries()) {
//     console.log(item);
// }

// [ 0, "red" ]
// [ 1, "green" ]
// [ 2, "blue" ]
console.log('0000')

const SleepSec = async (time) => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve()
      },1000)})
  }

  const fetchData = () => new Promise((resolve) => setTimeout(resolve, 2000, 1))
  const fetchMoreData = () => new Promise((resolve) => setTimeout(resolve, 1000, 2))
  const fetchMoreData2 = () => new Promise((resolve) => setTimeout(resolve, 1000, 3))

//   (async () => {
//     console.log('000000')
//     const getList = await fetchData();
//     console.log('000011')
//     const getAnotherList = await fetchMoreData();
//     console.log('000022')
//   })();
const testFetchData = async () => {
    await fetchData()
    console.log('testFetchData')
    throw('1111 wocuole')
}

const testFetchMoreData = async () => {
    await fetchMoreData()
    console.log('fetchMoreData')
}
const a = async () => {
    console.log('000000')
    // const [err, moreData] =  to(testFetchData())
    // console.log(err)
    const moreData =  testFetchData()
    console.log('000001')
    const fetchData1 =  testFetchMoreData()
    await moreData
    await fetchData1
    console.log('000002')
}
a()
console.log('222')

function to(promise) {
    return promise.then(data => {
       return [null, data];
    })
    .catch(err => [err]);
 }

 var obj = {}
 Object.defineProperty(obj, 'num', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
 })
 console.log(obj)

 console.log('test test test')
// let initValue = 0
//  console.log(Number.isFinite(initValue))
//  let floatValue = 0
//  console.log(Number.isFinite(floatValue))
let aO = {a:1,b:2}
let bO = {a:3, b:2, c:101}
let cO = {...aO, ...bO}
let dO = {...aO, bO}
let eO = {aO, ...bO}
console.log('test test test co')
console.log(cO)
// console.log('test test test do')
// console.log(dO)
// console.log('test test test eo')
// console.log(eO)

const panStyle = {
  left: 105,
  top: 205,
};
const Tp_Container =  {
  position: 'absolute',
  top: 100,
  left:100,
  width: 500,
  height: 500,
}
const compound = {...Tp_Container, ...panStyle}
console.log(compound)

// //第1种写法  
// function Circle(r) {  
//   this.r = r;  
// }  
// Circle.PI = 3.14159;  
// Circle.prototype.area = function() {  
// return Circle.PI * this.r * this.r;  
// }  

// var c = new Circle(2.0);
// c.r = 1
// alert(c.area());

//第4种写法  
var Circle={  
  "PI":3.14159,  
"area":function(r){  
         return this.PI * r * r;  
       }  
};  
// alert( Circle.area(1.0) );

function Person(){    
  var name = "default";       
     
  return {    
     getName : function(){    
         return name;    
     },    
     setName : function(newName){    
         name = newName;    
     }    
  }    
  };   

  var p = new Person();
  p.setName("Tom");
  // alert(p.getName());
  var Jack = function(){};
  //继承自Person
  Jack.prototype = new Person();
  //添加私有方法
  Jack.prototype.Say = function(){
      // alert("Hello,my name is Jack");
  };
  var j = new Jack();
  j.setName("Jack");
  j.Say();

  let input = [0,1]
  let [first,second] = input
  console.log('a1 is ', first)
  console.log('b1 is ', second)


  let CameraTeacherDefaultStyle = {
    position: 'absolute',
    overflow: 'hidden',
    width: 468,
    height: 351,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#31769c',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  }

  let CameraTeacherStyle =  {
    position: 'absolute',
    top: 0,
    right: 0,
    overflow: 'hidden',
    width: 468,
    height: 351,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  }

  let compound1 = {...CameraTeacherDefaultStyle, ...CameraTeacherStyle}
  console.log('conpund ', compound1)


  // let apre = {a:100, b:1000}
  // let bpre = {b:100, c:2000}
  // let ab = {...apre, bpre}
  // [first, second] = [second, first];
  // [second, first] = [first,second]
  // console.log('a1 is ', first)
  // console.log('b1 is ', second)
  // alert(j.getName());