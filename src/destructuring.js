/* 배열 구조분해할당 */
const arr = [1, 2, 3];
const a = arr[0]; //1
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [d, e, f] = arr;
console.log('def', d, e, f);
console.log('d', d);
const [g, h, i] = [1, 2, 3];
console.log('g', g);
console.log('h', h);
console.log('i', i);

/* 객체 구조분해할당 */
const obj = { x: 1, y: 2, z: 3 };
//const x = obj.x;
//const y = obj.y;
//const z = obj.z;
const { x, y, z } = obj;
console.log('destructuring:', x, y, z);
console.log('obj:x', x);
console.log('obj:y', y);
console.log('obj:z', z);

const { s, t, v } = obj;
console.log(s, t, v);
