import { Map } from 'immutable';

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });

console.log(map1.equals(map2));
console.log(map1 === map2);

const copy = map2;

console.log(copy);
console.log(copy === map2);

import { List } from 'immutable';

const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const list3 = list1.concat(list2);

console.log(list1);
console.log(list2);
console.log(list3);

const alpha = Map({ a: 1, b: 2, c: 3, d: 4, e: 5 });
const alphaKeys = alpha.map((v, k) => k.toUpperCase()).join();

console.log(alpha, alphaKeys);

const firstMap = Map({ a: 1, b: 2, c: 3, d: 4 });
const obj = { d: 100, o: 200, g: 300 };
const secondMap = firstMap.merge(obj);

const firstList = List([1, 2, 3]);
const array = [7, 8, 9];
const secondList = firstList.concat(array);

console.log(secondMap);
console.log(secondList);

import { Seq } from 'immutable';

const newObj = { a: 1, b: 2, c: 3 };
const seq = Seq(newObj)
  .map((x) => x * x)
  .toObject();

console.log(seq);

const list4 = List([1, 2, 3]);
const spreadedArray = [0, ...list4, 4, 5];

console.log(spreadedArray);

import { fromJS } from 'immutable';

const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });

console.log(nested);

import { Set } from 'immutable';

const mapAsKey1 = Map({ a: 1, b: 2, c: 3 });
const mapAsKey2 = Map({ a: 1, b: 2, c: 3 });
const set = Set().add(mapAsKey1);

console.log(set.has(mapAsKey2));

const { Range } = require('immutable');
const range = Range(1, Infinity)
  .skip(1000)
  .map((n) => -n)
  .filter((n) => n % 2 === 0)
  .take(2)
  .reduce((r, n) => r * n, 1);

console.log(range);
