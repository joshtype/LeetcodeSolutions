// sat game on easy mode (20 rows):

// create arr of len 20 for ea of 3 cols
let getCol = function() {
    let col = new Array(20);  // increase/decrease len to increase/decrease difficulty

    for(let i = 0; i < col.length; i++) {

        while(true) {
            // get a random num between 0 & 10
            let n = Math.floor(Math.random() * 10);
            // only add rand nums in interval (1, 5)
            if(n > -2 && n !== 0 && n < 6) {
                if(n !== col[0] && n !== col[1] && n !== col[2]) {
                    // randomly assign n to positive or negative
                    if(Math.floor(Math.random() * 10) % 2 == 0) {
                        // add positive n to arr
                        col[i] = n; 
                        break;
                    } else {
                        col[i] = -n; 
                        break;
                    }
                }
            }
        }
    }
    return col;
}

let grid = new Array(3);  // grid of 3 cols
for(let i = 0; i < grid.length; i++) {
    // call getCol() to generate valid random ints for 
    grid[i] = getCol();
}

console.log(grid);