function main() {
  const langToCompile = `import os
import re

langToCompile = r\'''${quine() + "\nmain()"}\'''

def count_files_with_substring(directory, regex):
  count = 0
  for filename in os.listdir(directory):
    if re.match(regex, filename):
      count += 1
  return count

directory = os.getcwd()  
regex = r"^solution.*\.js$" 

matching_file_count = count_files_with_substring(directory, regex)
filename = f"solution{matching_file_count + 1}.js"

with open(filename, 'w') as f:
  f.write(langToCompile)

print(f"Saved to {filename}")`;

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
  const substringToMatch = /^solution.*\.py$/;

  const matchingFileCount = countFilesWithSubstring(
    directoryPath,
    substringToMatch
  );

  function quine() {
    return main.toString();
  }

  const filename = `solution${matchingFileCount + 1}.py`;

  fs.appendFile(filename, langToCompile, (err) => {
    if (err) throw err;
    console.log(`Saved to ${filename}!`);
  });
}
main();
