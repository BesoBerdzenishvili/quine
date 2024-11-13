function main() {
  let fs = require("fs");

  const path = require("path");

  function countFilesWithSubstring(directory, regex) {
    let count = 0;

    fs.readdirSync(directory).forEach((file) => {
      if (path.basename(file).match(regex)) {
        count++;
      }
    });

    return count;
  }

  const directoryPath = "./";
  const substringToMatch = /^solution.*\.js$/;

  const matchingFileCount = countFilesWithSubstring(
    directoryPath,
    substringToMatch
  );

  function quine() {
    return main.toString();
  }

  fs.appendFile(
    `solution${matchingFileCount > 0 ? matchingFileCount + 1 : ""}.js`,
    quine() + "\nmain()",
    (err) => {
      if (err) throw err;
      console.log("Saved!");
    }
  );
}
main();
// create py code

// create js code

// create py file with py code
// py code has placeholder for js code

// programatically find how many files with the same name are in a directory
// +1 to their number

// use regexp to find number of files whose name starts with 'solution' and ends with '.py' or '.js' for py and js files

// remove all of this at the end
