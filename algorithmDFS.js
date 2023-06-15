/**
 * DEPTH-FIRST SEARCH (DFS) ALGORITHM JAVASCRIPT IMPLEMENTATION
 * TIME COMPLEXITY: O(n) *n = number of nodes in tree below starting node.
 * EXPLANATION: Finds the shortest path from a starting node to a target 
 * node. Given a starting node to begin searching from, DFS recursively 
 * searches the tree below the starting node and returns the node that 
 * contains the target value, or null if the target value isn't found.
 * 
 * @param  {node}  starting node to begin search from
 * @param  {value} target value to search tree below starting node for
 * @return {node}  or null if target value doesn't exist in tree
 */

const dfs = function(start, target) {
    // best case: starting node contains target val
    if(start.value === target) {
        // start node holds target val
        return start;
    }
    // avg - worst case: starting node doesn't contain target val
    for(let i = 0; i < start.children.length; i++) {
        // recur function to search every ith child node
        var result = dfs(start.children[i], target);
        // target val found during recursive for-loop
        if(result != null) {
            // return node containing target val
            return result;
        }
    }
    // if for-loop finishes iteration without finding target val
    return null;
};