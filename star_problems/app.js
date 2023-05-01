const TRIANGLES = {
  SQUARE: "square",
  HALLOWSQUARE: "hallow_square",
  LEFTTRIANGLE: "left_triangle",
  RIGHTTRIANGLE: "right_triangle",
  DOWNWARDTRIANGLE: "downward_triangle",
  PYRAMIDTRIANGLE: "pyramid_triangle",
  REVERSEDPYRAMIDTRIANGLE: "reversed_pyramid_triangle",
  DIAMOND: "diamond",
};

function generateFigure(size, type) {
  let result = "";
  switch (type) {
    case TRIANGLES.SQUARE:
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          result += "*";
        }
        result += "\n";
      }
      break;
    case TRIANGLES.HALLOWSQUARE:
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (i != 0 && i != size - 1 && j != 0 && j != size - 1) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }
      break;
    case TRIANGLES.RIGHTTRIANGLE:
      for (let i = 0; i < size; i++) {
        for (let j = size - 1; j >= 0; j--) {
          if (j > i) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }
      break;
    case TRIANGLES.DOWNWARDTRIANGLE:
      for (let i = 0; i < size; i++) {
        for (let j = size; j > 0; j--) {
          if (i >= j) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }
      break;
    case TRIANGLES.LEFTTRIANGLE:
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (i >= j) {
            result += "*";
          } else {
            result += " ";
          }
        }
        result += "\n";
      }
      break;
    case TRIANGLES.PYRAMIDTRIANGLE:
      for (let i = 0; i < size; i++) {
        for (let j = 2 * size - 1; j > 0; j--) {
          if (i < j - size || i < size - j) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }
      break;
    case TRIANGLES.REVERSEDPYRAMIDTRIANGLE:
      for (let i = size; i > 0; i--) {
        for (let j = 2 * size - 1; j > 0; j--) {
          if (i <= j - size || i <= size - j) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }
      break;
    case TRIANGLES.DIAMOND:
      for (let i = 0; i < size; i++) {
        for (let j = 2 * size - 1; j > 0; j--) {
          if (i < j - size || i < size - j) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }

      for (let i = size - 1; i > 0; i--) {
        for (let j = 2 * size - 1; j > 0; j--) {
          if (i <= j - size || i <= size - j) {
            result += " ";
          } else {
            result += "*";
          }
        }
        result += "\n";
      }
      break;
    default:
      result = "Invalid square type";
  }

  return result;
}

//Enter the size and the type of the figure
//***Types***
//***1.square
//***2.hallow_square
//***3.left_triangle
//***4.right_triangle
//***5.downward_triangle
//***6.pyramid_triangle
//***7.reversed_pyramid_triangle

let result1 = generateFigure(5, TRIANGLES.SQUARE);
let result2 = generateFigure(5, TRIANGLES.HALLOWSQUARE);
let result3 = generateFigure(5, TRIANGLES.LEFTTRIANGLE);
let result4 = generateFigure(5, TRIANGLES.RIGHTTRIANGLE);
let result5 = generateFigure(5, TRIANGLES.DOWNWARDTRIANGLE);
let result6 = generateFigure(5, TRIANGLES.PYRAMIDTRIANGLE);
let result7 = generateFigure(5, TRIANGLES.REVERSEDPYRAMIDTRIANGLE);
let result8 = generateFigure(5, TRIANGLES.DIAMOND);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
