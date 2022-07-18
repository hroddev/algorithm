
const flizzBuzz = (n) => {
  for (let i = 1; i <= n; i++)
    if (i % 15 == 0) {
      console.log(i + " FlizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i + " Flizz");
    } else if (i % 5 == 0) {
      console.log(i + " Buzz");
    } else {
      console.log(i);
    }
};

flizzBuzz(50);