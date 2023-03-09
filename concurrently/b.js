let i = 0;
const id = setInterval(() => {
  if (++i >= 10) {
    // process.exitCode = 1;
    // process.exit(1);
    // throw Error('');
    clearInterval(id);
  }

  console.log('bbbbbb');
}, 300);
