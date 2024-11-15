function main() {
  const input = `input = r\'''${quine() + "\nmain()"}\'''
print(input)`;

  function quine() {
    return main.toString();
  }

  console.log(input);
}
main();
