const arg = parseInt(process.argv[2]);
console.log(!isNaN(arg) ? `My number: ${arg}` : 'Not a number');
