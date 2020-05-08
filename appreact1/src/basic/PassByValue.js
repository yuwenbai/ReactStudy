import React, { useRef, useEffect } from "react";
import {isFunction} from './../utils'
import deepClone from './../deepclone'
import memoize from './../utils/memoize'
// import testGlobal from './../testGolbal'
// let tgg = new testGlobal()
// tgg.setValue('10000')
var iterator = [2,3,10,33]
for (let value of iterator) {
  console.log(value);
}

let set = new Set(['a', 'b', 'c']);
console.log(set.keys()); // SetIterator {"a", "b", "c"}
console.log([...set.keys()]); // ["a", "b", "c"]

// 箭头函数
var s = Symbol();
console.log(typeof s); // "symbol"

console.log('箭头函数')
var aaa = function () {

}
var aaa = new aaa(); // TypeError: Foo is not a constructor

// var Foo = () => {};
// var foo = new Foo(); // TypeError: Foo is not a constructor

//数组乱序
const value = 102
console.log(`ffffff->${value}`)
console.log('数组乱序')
var values = [1, 2, 3, 4, 5];

values.sort(function(){
    return Math.random() - 0.5;
});

console.log(values)

console.log('函数记忆')
var add = function(a, b, c) {
  return a + b + c
}

var memoizedAdd = memoize(add)

console.time('use memoize')
for(var i = 0; i < 100000; i++) {
    memoizedAdd(1, 2, 3)
}
console.timeEnd('use memoize')

console.time('not use memoize')
for(var i = 0; i < 100000; i++) {
    add(1, 2, 3)
}
console.timeEnd('not use memoize')
//
console.log('数组扁平化')
var arr1 = [1, [2, [3, 4]]];
console.log([].concat(...arr1)); // [1, 2, [3, 4]]

// 数组最大值
console.log('数组最大值')
var arr = [6, 4, 1, 8, 2, 101, 23];

var result = arr[0];
for (var i = 1; i < arr.length; i++) {
    result =  Math.max(result, arr[i]);
}
console.log(result);
console.log('simple apply ' + Math.max.apply(null, arr))
console.log('es6 grammar '+ Math.max(...arr))
//深浅拷贝
// var arr = ['old', 1, true, null, undefined];

// var new_arr = arr.concat();

// new_arr[0] = 'new';

// console.log(arr) // ["old", 1, true, null, undefined]
// console.log(new_arr) // ["new", 1, true, null, undefined]

var arr = [{old: 'old'}, ['old']];
var new_arr = deepClone(arr);
new_arr[0].old = 'new'
console.log(' arr ' + JSON.stringify(arr))
console.log(' arr ' + JSON.stringify(new_arr))
// 类型判断
console.log(typeof undefined) // "undefined"
console.log(typeof null) // "object"
console.log(typeof true) // "boolean"
console.log(typeof 1) // "number"
console.log(typeof "s") // "string"
console.log(typeof {}) // "object"
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]

var date = new Date();
console.log(Object.prototype.toString.call(date)) // [object Date]

function a(){

}
console.log('execute result is '+isFunction(a))

// 数组去重
var array = [1, 2, 1, 1, '1', '2'];

function unique(array) {
    return array.concat().sort().filter(function(item, index, array){
        return !index || item !== array[index - 1]
    })
}

console.log('数组去重' + unique(array));

//防抖
function debounce(func, wait, immediate) {

  var timeout, result;

  var debounced = function () {
      var context = this;
      var args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
          // 如果已经执行过，不再执行
          var callNow = !timeout;
          timeout = setTimeout(function(){
              timeout = null;
          }, wait)
          if (callNow) result = func.apply(context, args)
      }
      else {
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
      return result;
  };

  debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
  };

  return debounced;
}

function PassByValue() {

  var obj = {
      value: 1
  }

  function foo(o){
    o = 2
    console.log(o); //2
  }

  const refff = useRef(null);
  
  const outValue = () => {
    console.log("testBtn...");
    console.log('testRef is ' + JSON.stringify(refff))
  }

  const action = debounce(outValue, 1000, true)

  const testBtn = () => {
    action()
  }

  useEffect(() => {
    
    // refff && refff.testApply()

    foo(obj)
    console.log(obj.value); //2
    
    console.log("useEffect...");
    return () => {
      console.log("componentWillUnmount...");
    };
  });

  return (
    <div>
      <button onClick={testBtn}>Click me</button>
    </div>
  );
}

export default PassByValue;
