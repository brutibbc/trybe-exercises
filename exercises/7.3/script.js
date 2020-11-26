//7.3 EXERCÍCIO 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4,5),9);
assert.strictEqual(sum(0,0),0);
assert.throws(() => {sum(4,'5')});
//console.log(sum(4,'5'));

//7.3 EXERCÍCIO 2
//const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4]);
assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1,2,3,4]);

const arrayTeste = [1,2,3,4];
myRemove(arrayTeste,1);
assert.deepStrictEqual(arrayTeste,[1,2,3,4]);

assert.deepStrictEqual(myRemove([1,2,3,4],5),[1,2,3,4]);

//7.3 EXERCÍCIO 3
//const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4]);

const arrayTeste2 = [1, 2, 3, 4];
myRemoveWithoutCopy(arrayTeste2, 3);
assert.notDeepStrictEqual(arrayTeste2,[1, 2, 3, 4]);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4]);

//7.3 EXERCÍCIO 4
//const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15),'fizzbuzz');
assert.strictEqual(myFizzBuzz(27),'fizz');
assert.strictEqual(myFizzBuzz(20),'buzz');
assert.strictEqual(myFizzBuzz(7),7);
assert.strictEqual(myFizzBuzz('7'),false);

//7.3 EXERCÍCIO 5
//const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1,obj2);
assert.notDeepStrictEqual(obj1,obj3);