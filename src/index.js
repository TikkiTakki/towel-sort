
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let sortArr = [];
  for (let i = 0; i < matrix.length; i++) {
    (i % 2 == 0) ? matrix[i].forEach(element => sortArr.push(element)): matrix[i].reverse().forEach(element => sortArr.push(element));
  }
  return sortArr;
}
