// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// [1, 2]
// [0, 4]
// [5, 6]
//
// [0, 0]
// [0, 0]
// [0, 6]

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  const array: Array<[number, number]> = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      const num = matrix[row][col];
      if (num === 0) {
        array.push([row, col]);
      }
    }
  }

  // biome-ignore lint/complexity/noForEach: <explanation>
  array.forEach((coord) => {
    const [x, y] = coord;
    matrix[x].fill(0);

    for (let row = 0; row < matrix[y].length; row++) {
      matrix[row][y] = 0;
    }
  });

  return matrix;
}
