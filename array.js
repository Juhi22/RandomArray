// 0ból álló 2d tömb
const twod = (a, b) => {
  let array = [];
  for (let y = 0; y < a; y++) {
    let row = [];
    for (let x = 0; x < b; x++) {
      row.push(0);
    }
    array.push(row);
  }
  return array;
};

module.exports = { twod };
