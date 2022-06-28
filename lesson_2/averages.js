let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  for (let i = 0; i < this.length; i += 1) {
    total += this[i];
  }

  return total / this.length;
}

let averageTemp = average.bind(temperatures);
console.log(averageTemp());

temperatures.average = average;
console.log(temperatures.average());