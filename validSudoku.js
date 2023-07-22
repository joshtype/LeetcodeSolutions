/*
    LEETCODE PROBLEM : isValidSudoku; Medium Difficulty; Javascript
    TIME COMPLEXITY  : O(n^2), where n = length of the input arr iterated by nested loops.

    EXPLANATION: 
        Determine if the input 2D array represents a valid Sudoku grid.
        Valid grids are those in which each box in the grid contains an
        unrepeated char 1 - 9 or a "." (repesenting an empty box). If
        the input 2D arr meets this condition then return true. If not
        then return false.
    
    EXAMPLE:
        input "board" = 
        [
          ["5","3",".",".","7",".",".",".","."],  
          ["6",".",".","1","9","5",".",".","."],
          [".","9","8",".",".",".",".","6","."],
          ["8",".",".",".","6",".",".",".","3"],
          ["4",".",".","8",".","3",".",".","1"],
          ["7",".",".",".","2",".",".",".","6"],
          [".","6",".",".",".",".","2","8","."],
          [".",".",".","4","1","9",".",".","5"],
          [".",".",".",".","8",".",".","7","9"]
        ]
        output = true
*/

/**
 * @param  {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let x = 0; x < 9; x++) {
        // init sets that empty ea reloop of x
        let row = new Set();
        let col = new Set();
        let grd = new Set();

        for(let y = 0; y < 9; y++) {
            // ea box is a position on a cartesian plane
            let rowBox = board[x][y];
            let colBox = board[y][x];

            // formula to automate positioning in 3x3 subgrids
            let xGrd = (3 * Math.floor(x / 3) + Math.floor(y / 3));
            let yGrd = (3 * (x % 3) + (y % 3));
            let grdBox = board[xGrd][yGrd];

            // check rows, ignoring empties
            if(rowBox !== ".") {
                // position = duplicated num
                if(row.has(rowBox)) return false;
                // position != duplicated num
                row.add(rowBox);  // add to set
            }
            // check cols
            if(colBox !== ".") {
                if(col.has(colBox)) return false
                col.add(colBox);
            }
            // check 3x3 subgrids
            if(grdBox !== ".") {
                if(grd.has(grdBox)) return false
                grd.add(grdBox);
            }
        }
    }
    // nested loops finish iteration w/out exiting early
    return true;  // board is valid sudoku
};


// testing
const testBoard = function() {
    let board1 = 
        [
            ["5","3",".",".","7",".",".",".","."],  
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]
        ];
        let board2 = 
        [
            ["5","3",".",".","7",".",".",".","."],  
            ["6",".",".","1","9","5",".",".","."],
            [".","5","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]
        ];

    console.log("TEST 1: " + isValidSudoku(board1));  
        // expected output = true
    console.log("TEST 2: " + isValidSudoku(board2));
        // expected output = false
};
testBoard();
