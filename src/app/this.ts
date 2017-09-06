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



// function func(param1) {
//   console.log('func', this);
//   Object.keys(this).forEach(key => {
//     console.log(key);
//     console.log(this[key]);
//   });
// }

// const objA = {
//   methodA() {
//     console.log('objA methodA', this);
//   }
// };

// const objB = { a: 1, b: 2 };

// func.call(objB);
// objA.methodA.call(objB);
