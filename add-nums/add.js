/**
 * Program to add multiple command line arguments
*/

function main() {
  const nums = process.argv.slice(2).map(n => +n);
  const sum = nums.reduce((sum, n) => sum + n, 0);
  console.log(sum);
}

main();
