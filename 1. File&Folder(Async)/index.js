const fs = require('fs');

//use to write a file
txt = "hello"
fs.writeFile("hello.txt", txt , (err) => {
    if(err) console.log(err);
    else console.log("File created");
})

//use to read a file
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if(err) console.log(err);
    else console.log(data);
})

//use tp append a data in the file
fs.appendFile("hello.txt", " world", (err) => {
    if(err) console.log(err);
    else console.log("data appended");
})

//use to rename the file
fs.rename("hello.txt", "HELLO.txt", () => {
    console.log("file renamed");
})

//use to delete the file
fs.unlink("HELLO.txt", (err) => {
    if(err) console.log(err);
    else console.log("deleted..");
})

//use to create a folder (directory)
fs.mkdir("lolo", (err) => {
    if(err) console.log(err);
    else console.log("folder created...");
})

//use to read the folder
fs.readdir("lolo", {withFileTypes: true}, (err, files) => { //the withFileTypes: true will give symbolType if 1 than its file and if 2 its folder
    if(err) console.log(err);
    else console.log(files);

})

//delete a folder
fs.rm("lolo", {recursive : true} ,(err) => {
    if(err) console.log(err);
    else console.log("Folder deleted!");
})