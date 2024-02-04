let name = {
  firstName: "Rohan",
  lastName: "Kumar",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + hometown + " " + state
  );
};

let printMyName = printName.bind(name, "Delhi", "New Delhi");
printMyName();

Function.prototype.myBind = function (...args) {
  // this --> primtName
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Ghaziabad", "Uttar Pradesh");
printMyName2();
