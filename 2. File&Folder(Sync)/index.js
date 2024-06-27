const fs = require("fs");

//create a file sychronously
fs.writeFileSync("hello.txt", "HELLOOOOO..........");
console.log("CREATED......") //this line of code will execute only when the above line will get execute

//reads the data in the f
let data = fs.readFileSync("hello.txt", "utf-8");
// let data = fs.readFileSync("hello2.txt", "utf-8");
console.log("File read");
console.log(data);

//append data in a file
fs.appendFileSync("hello.txt", " Darshan here");
// fs.appendFileSync("hello2.txt", " Darshan here");   this line will create a new file name hello2.txt and append the data in that file
console.log("Data appended");

//rename a existing file 
fs.renameSync("hello.txt", "helloUpdated.txt");
console.log("File renamed");

//delete a file 
fs.unlinkSync("helloUpdated.txt");
console.log("File deleted");

fs.mkdirSync