// Tic-tac-toe solver

// DRY UP THIS CODE
function checkWin(grid) {

  // Check horizontal X wins
  if (grid[0][0] === 'X' && grid[0][1] === 'X' && grid[0][2] === 'X') return 'X';

  if (grid[1][0] === 'X' && grid[1][1] === 'X' && grid[1][2] === 'X') return 'X';

  if (grid[2][0] === 'X' && grid[2][1] === 'X' && grid[2][2] === 'X') return 'X';


  // Check vertical X wins
  if (grid[0][0] === 'X' && grid[1][0] === 'X' && grid[2][0] === 'X') return 'X';

  if (grid[0][1] === 'X' && grid[1][1] === 'X' && grid[2][1] === 'X') return 'X';

  if (grid[0][2] === 'X' && grid[1][2] === 'X' && grid[2][2] === 'X') return 'X';


  // Check diagonal X wins
  if (grid[0][0] === 'X' && grid[1][1] === 'X' && grid[2][2] === 'X') return 'X';

  if (grid[0][2] === 'X' && grid[1][1] === 'X' && grid[2][0] === 'X') return 'X';


  // Check horizontals
  if (grid[0][0] === 'O' && grid[0][1] === 'O' && grid[0][2] === 'O') return 'O';

  if (grid[1][0] === 'O' && grid[1][1] === 'O' && grid[1][2] === 'O') return 'O';

  if (grid[2][0] === 'O' && grid[2][1] === 'O' && grid[2][2] === 'O') return 'O';

  // Check verticals
  if (grid[0][0] === 'O' && grid[1][0] === 'O' && grid[2][0] === 'O') return 'O';

  if (grid[0][1] === 'O' && grid[1][1] === 'O' && grid[2][1] === 'O') return 'O';

  if (grid[0][2] === 'O' && grid[1][2] === 'O' && grid[2][2] === 'O') return 'O';


  // Check diagonals
  if (grid[0][0] === 'O' && grid[1][1] === 'O' && grid[2][2] === 'O') return 'O';

  if (grid[0][2] === 'O' && grid[1][1] === 'O' && grid[2][0] === 'O') return 'O';


  // Check for ties
  if (grid[0][0] !== ' ' && grid[0][1] !== ' ' && grid[0][2] !== ' ' &&
      grid[1][0] !== ' ' && grid[1][1] !== ' ' && grid[1][2] !== ' ' &&
      grid[2][0] !== ' ' && grid[2][1] !== ' ' && grid[2][2] !== ' ') return 'T';

  return false;

}




// TESTS
// DO NOT MODIFY BELOW THIS LINE

let grid;

grid = [[' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be false`);


grid = [['X','X','X'],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ',' '],
        ['O','O','O'],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ',' '],
        [' ',' ',' '],
        ['X','X','X']]

console.log(`${checkWin(grid)} should be X`);



grid = [['X',' ',' '],
        ['X',' ',' '],
        ['X',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ','O',' '],
        [' ','O',' '],
        [' ','O',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ','X'],
        [' ',' ','X'],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);


grid = [['X',' ',' '],
        [' ','X',' '],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ','O'],
        [' ','O',' '],
        ['O',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [['X','O','X'],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be T`);

grid = [['X','X',' '],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be false`);






