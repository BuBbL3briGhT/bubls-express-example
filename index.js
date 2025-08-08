const BubbleScript = require("bubblescript");
const path = require("path");
const fs = require("fs");

const { mkfn } = BubbleScript;

// console.log(BubbleScript);

// BubbleScript.rootBinding.require = require;
BubbleScript.rootBinding.require =
  mkfn(o => require(...o));

let loadFile = function (filePath) {
  filePath = path.join(__dirname, filePath);
  return BubbleScript.eval(
    fs.readFileSync(filePath, 'utf-8'));
}

// BubbleScript.loadFile("./index.bubls");
loadFile("./index.bubls");
// loadFile("./hi.bubls");

// console.log(BubbleScript);
