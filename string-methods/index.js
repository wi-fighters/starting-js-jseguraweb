// 1

const name = "Natalia";
console.log(`Name length is ${name.length}`);
const secondElem = name[1];
const sixthElem = name[5];
console.log(`2nd element: ${secondElem}, 6th element: ${sixthElem}`);


// 2

const js = "JavaScript";
console.log(`The length of the string is: ${js.length} characters`);
const letterJ = js[0];
const letterS = js[4];
console.log(`${letterJ} & ${letterS}`);


// 3

// const sentence = "I can walk in the park all day!";
// console.log(`${sentence.substring(18, 22)}`);

const sentence = "I can walk in the park all day!";
const goal = sentence.includes("park");
const park = (goal)? "park" : "keep trying";
console.log(`${park}`);


//4

const jsWord = "JavaScript";
console.log(`${jsWord.substring(3, 6)}`);


// 5

const helloWorld = "Hello World";
console.log(`${helloWorld.toUpperCase()}`);

