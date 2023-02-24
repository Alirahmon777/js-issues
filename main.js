/////////////////////////////////// 1 - MASALA ////////////////////////////////////////
console.log("1-masala");

let answer = [];
function spelling(str) {
  for (let i = 0; i < str.length; i++) {
    answer.push(str.substring(0, i + 1));
  }
  return console.log(answer);
}

spelling("bee");

spelling("happy");

spelling("eagerly");

///////////////////////////////// 1 - MASALA ////////////////////////////////////////

///////////////////////////////// 2 - MASALA ////////////////////////////////////////
console.log("\n 2-masala");

function testJackpot(result) {
  for (let i = 1; i < result.length; i++) {
    if (result[0] !== result[i]) {
      return console.log(false);
    }
  }

  return console.log(true);
}

testJackpot(["@", "@", "@", "@"]);

testJackpot(["abc", "abc", "abc", "abc"]);

testJackpot(["SS", "SS", "SS", "SS"]);

testJackpot(["&&", "&", "&&&", "&&&&"]);

testJackpot(["SS", "SS", "SS", "Ss"]);

///////////////////////////////// 2 - MASALA ////////////////////////////////////////

///////////////////////////////// 4 - MASALA ////////////////////////////////////////
console.log("\n 3-masala");

function toArray(obj) {
  let answer3 = [];
  for (let key in obj) {
    answer3.push([key, obj[key]]);
  }
  return console.log(answer3);
}

toArray({ a: 1, b: 2 }); //➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }); //➞ [["shrimp", 15], ["tots", 12]]

toArray({}); // ➞ []

///////////////////////////////// 3 - MASALA ////////////////////////////////////////

///////////////////////////////// 4 - MASALA ////////////////////////////////////////
console.log("\n 4-masala");
function mapping(letters) {
  let answer4 = {};
  for (let i = 0; i < letters.length; i++) {
    answer4[letters[i]] = letters[i].toUpperCase();
  }

  return console.log(answer4);
}

mapping(["p", "s"]); // ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]); // ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]); //  ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }

///////////////////////////////// 4 - MASALA ////////////////////////////////////////

///////////////////////////////// 5 - MASALA ////////////////////////////////////////
console.log("\n 5-masala");
function volumeOfBox(sizes) {
  return console.log(sizes.width * sizes.length * sizes.height);
}

volumeOfBox({ width: 2, length: 5, height: 1 }); // ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }); // ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }); // ➞ 30

///////////////////////////////// 5 - MASALA ////////////////////////////////////////
