const array = [1, 2, 3, 4, 5];

// const result = array.map((item) => item * 2);
// console.log("result :", result);

// const newArray = array.map(function (item) {
//   return item + 2;
// });
// console.log("newArray :", newArray);

// reducer method
// const sum = array.reduce((total, num) => total + num);
// console.log(sum);

// polyfill array map
Array.prototype.map(function (callback) {
  const resultArray = [];
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }
  for (let i = 0; this.length; i++) {
    resultArray.push(callBack(this[i], i, this));
  }
  return resultArray;
});

const polyfillResult = array.map((item, index) => item * index);
console.log(polyfillResult);

const newArray = array.map(function (item) {
  return item + 2;
});

// polyfill of array reduce 

Array.prototype.reduce = function(callBack, intialValue) {
  let accumulator = intialValue;
  for(let i = 0; i < this.length; i++) {
    // if the initial value exists, call the callback function on the existing element and store in accumulator
    if(accumulator) {
      accumulator = callBack.call(undefined, accumulator, this[i], i, this);
      // if initial value does not exists, assing accumulator to be a current element of the array;
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
}

console.log(newArray);
