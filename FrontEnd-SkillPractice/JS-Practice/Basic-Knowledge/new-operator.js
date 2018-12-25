// 当代码 new Foo(...) 执行时，会发生以下事情：

// 一个继承自 Foo.prototype 的新对象被创建。
// 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
// 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）
function Person1(name) {
    this.name = name;
    // 没有返回值
  }
  
  function Person2(name) {
    this.name = name;
    return name;
    // 返回非对象
  }
  
  function Person3(name) {
    this.name = name;
    return { a: 1 };
    // 返回对象
  }
  
  function Person4(name) {
    this.name = name;
    return null;
    // 返回null
  }
  
  var p1 = new Person1("aa");
  var p2 = new Person2("bb");
  var p3 = new Person3("cc");
  var p4 = new Person4("dd");
  
  console.log(p1); // Person1 {name: "aa"}
  console.log(p2); // Person2 {name: "bb"}
  console.log(p3); // {a: 1}
  console.log(p4); // Person4 {name: "dd"}