const buf = Buffer.from('站');
console.log(buf);
// console.log(buf.toString())
// console.log(Array.from(buf))
console.log(Buffer.alloc(10,101).toString())