// // ES5
// function sleep(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => (Math.random() < 0.5 ? resolve() : reject()), ms);
//   });
// }

// sleep(1000)
//   .then(() =>
//     console.log("1").catch(() => {
//       console.log("siingle catch");
//     })
//   )
//   .then(() => sleep(400))
//   .then(() => console.log("3"))
//   .then(() => sleep(400))
//   .then(() => console.log("5"))
//   .then(() => sleep(400))
//   .then(() => console.log("7"))
//   .then(() => console.log("8"))
//   .catch(() => {
//     console.log("rejceted");
//   });

// (async function () {
//   try {
//     await sleep(1000)
//       .then(() => {
//         console.log(1);
//       })
//       .catch(() => console.log("e", 1));
//     await sleep(400).catch(() => console.log("e", 2));
//     console.log(2);
//     await sleep(400).catch(() => console.log("e", 3));
//     console.log(3);
//   } catch (e) {
//     console.log("global catch", e);
//   }
// })();

// function myFetch(url, method = "GET") {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = (event) => resolve(JSON.parse(event.target.response));
//     xhr.onerror = (err) => reject(err);
//     xhr.open(method, url);
//     xhr.send();
//   });
// }

// myFetch("https://api.nweoo.com/news/articless").then((data) => {
//   console.log(data);
// }, (e = console.log("error wow")));
// //   .catch((e) => console.error(e));

function test(time) {
  return new Promise((resolve, reject) => {
    time < 2000 ? resolve("abcd") : reject();
  });
}

test(300).then(() => {
  console.log("success???");
});
// js mhr ka a kone lone ko lote tl
// angular mhr ae function twy (actually method twy tann pe execute ma lote tr ka class twy htl mhr moh loh )
// component twy a kone lone ka class moh loh ae method twy ka class twy htl mhr moh loh
class Dog {
  bark() {
    return "woff";
  }
}

let dog = new Dog();

console.log(dog.bark());
