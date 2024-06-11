// const data = ["a", "b", "c", 1, 2, 3];
// string baiwal hello nemeed too baiwal 10 aar urjuuleh n

// const newa = data.map((element, index) => {
//   console.log(typeof element);

//   if (typeof element === "string") {
//     return element + " hello";
//   }
//   return element * 10;

// });
// console.log(newa);

//  too bolon stringiig ylgahiig for loop er hiisen
// const num = [];
// const letter = [];

// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "string") {
//     letter.push(data[i]);
//   } else num.push(data[i]);
// }
// console.log(letter);
// console.log(num);

//  too bolon stringiig ylgahiig map aar hiih

// const numarr = [];
// const letarr = [];
// data.map((element, index) => {
//   if (typeof element === "string") {
//     letarr.push(element);
//     return;
//   }
//   numarr.push(element);
// });
// console.log(letarr);
// console.log(numarr);
//

//  too bolon stringiig ylgahiig  filtereer hiih

// const arr = [1, 2, 3, 4, 5];
// const data = ["a", "b", "c", 1, 2, 3];
// const numbers = []

// const chars = data.filter((el) => {
//     if( typeof el === 'number') numbers.push(el);
//     return typeof el === 'string'
// })

// console.log(chars,'\n',numbers);

// / object

// const Uyanga = {
//   name: "Uyanga",
//   age: 18,
//   gender: "female",
//   height: [160],
//   weight: 60,
//   hobby: "coding",
// };

// console.log(Uyanga.height[0]);

// const board = [
//   {
//     title: "To do",
//     bgColor: "green",
//   },
//   {
//     title: "In progress",
//     bgColor: "yellow",
//   },
//   {
//     title: "Done",
//     bgColor: "green",
//   },
//   {
//     title: "Blocked",
//     bgColor: "red",
//   },
// ];
// board.map((element)=>{
//     board(element.title, element.bgColor,5);

// })

let company = {
  name: "Pinecone",
  location: "3 gol",
  classes: [
    {
      classname: "1b class",
      teachers: [
        { name: "Batmunkh", position: "Master" },
        { name: "Bat-Orgil", position: "Instructor" },
      ],
      students: [
        { name: "UYanga", age: 20 },
        { name: "Namuunaa", age: 22 },
        { name: "Khulan", age: 32 },
      ],
    },
    {
      classname: "2b class",
      teachers: [
        { name: "BAt", position: "Master" },
        { name: "Bold", position: "Instructor" },
      ],
      students: [
        { name: "Azaa", age: 18 },
        { name: "Mazaa", age: 22 },
        { name: "JAvzaa", age: 24 },
      ],
    },
    {
      classname: "3b class",
      teachers: [
        { name: "Dolgor", position: "Master" },
        { name: "Delger", position: "Instructor" },
      ],
      students: [
        { name: "Gonchig", age: 20 },
        { name: "bambar", age: 21 },
        { name: "Sugars", age: 32 },
      ],
    },
  ],
};
//  object uusgeed dundaj nasiig for loop ashiglaj olson///

// let students = company.classes[0].students;
// let ages = 0;
// for (let i = 0; i < students.length; i++) {
//   ages += students[i].age;
// }
// let avage = ages / students.length;
// console.log(Math.round(avage));

//  studentsiin neriig uurchluh

company.classes[0].students[0].name="bobby"
 
console.log(company.classes[0].students[0]);