const userPath=require("path");

const filepath=userPath.join("/content","subfolder",'text.txt');
console.log(`${filepath}`);

// prints basename of the path
const basename=userPath.basename(filepath);
console.log(`${basename}`);

// prints absolute path

const absolute=userPath.resolve(__dirname,"content","subfolder","text.txt");
console.log(absolute);