// Basically this is file handeling
const { readFileSync, writeFileSync} = require("fs");

// !sync approach of file handeling

// read file
const readfileFirst = readFileSync("./content/first.txt", "utf8");
const readfileSecond = readFileSync("./content/second.txt", "utf8");

console.log(readfileFirst);
console.log(readfileSecond);


// write file

writeFileSync(
  "./content/result-writeSync.txt",
  `Here is the result: ${readfileFirst},${readfileSecond},${(isTrue = 1)}, {flag="dkndjdn"}`
);


// !async approach of file handeling
const {readFile,writeFile}=require("fs");

readFile("./content/first.txt","utf8", (e, result) => {
  if (e) {
    console.log("error occurred");
    return;
  }
  const first=result;

  readFile("./content/second.txt","utf8",(err,SecondResult)=>{
    if(err){
        console.log("error");
        return;
    }
    const second=SecondResult;
    writeFile("./content/result-writeSync.txt",`The result is: ${first},${second}`,
        (error,finalResult)=>{
            if(error){
                console.log("Error");
                return;
            }
            console.log(finalResult);
        }
    );
  })
});

