function seed(params) {
  // To return arguments as an Array
  var args = new Array(arguments.length)
  for (var i = 0; i < args.length; i++) {
    args[i] = arguments[i]
  }
  return args
  // https://stackoverflow.com/a/24011235/13107686
}

function same([x, y], [j, k]) {
  // compare value of 2 arrays, if same, return true, else false
  // Warn if overriding existing method
  if (Array.prototype.equals) {
    console.warn(
      "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
    )
  }

  var array1 = []
  var array2 = []

  if (array1.length !== array2.length) {
    return false
  } else {
    for (var i = 0; i < this.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      } else {
        return true
      }
    }
  }
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {}

const printCell = (cell, state) => {}

const corners = (state = []) => {}

const printCells = state => {}

const getNeighborsOf = ([x, y]) => {}

const getLivingNeighbors = (cell, state) => {}

const willBeAlive = (cell, state) => {}

const calculateNext = state => {}

const iterate = (state, iterations) => {}

const main = (pattern, iterations) => {}

const startPatterns = {
  rpentomino: [
    [3, 2],
    [2, 3],
    [3, 3],
    [3, 4],
    [4, 4]
  ],
  glider: [
    [-2, -2],
    [-1, -2],
    [-2, -1],
    [-1, -1],
    [1, 1],
    [2, 1],
    [3, 1],
    [3, 2],
    [2, 3]
  ],
  square: [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2]
  ]
}

const [pattern, iterations] = process.argv.slice(2)
const runAsScript = require.main === module

if (runAsScript) {
  if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
    main(pattern, parseInt(iterations))
  } else {
    console.log('Usage: node js/gameoflife.js rpentomino 50')
  }
}

exports.seed = seed
exports.same = same
exports.contains = contains
exports.getNeighborsOf = getNeighborsOf
exports.getLivingNeighbors = getLivingNeighbors
exports.willBeAlive = willBeAlive
exports.corners = corners
exports.calculateNext = calculateNext
exports.printCell = printCell
exports.printCells = printCells
exports.startPatterns = startPatterns
exports.iterate = iterate
exports.main = main
