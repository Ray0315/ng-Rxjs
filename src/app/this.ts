function animal(name, food) {
  this.name = name;
  this.food = food;
  this.say = () => {
    console.log(name + ' likes ' + this.food + '.');
  };


}

function rabbit(name, food) {
  animal.call(this, name, food);
  // animal.apply(this, [name, food]);
}

let Judy = new rabbit('Judy', 'carrot');

Judy.say();


// function Hello(name) {
//   this.name = name;
//   this.say = () => {
//     console.log(`Hello, ${this.name}`);
//   };
// }

// let hello = new Hello('Tom');
// setTimeout(hello.say, 1000);



// function funcA(param1, param2) {
//   console.log(this, param1, param2);
// }

// const objB = { a: 1, b: 2 };

// const funcB = funcA.bind(objB, objB.a);

// funcB();
// funcB(objB.b);
