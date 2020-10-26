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