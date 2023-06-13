# Joshua Gregory/Jan. 2023
# Sorting Algorithm: Bubble Sort
# Time Complexity: 0(n^2)
# Aux Memory Space: 0(1)

import random

def bubble_sort(lst):
    ''' parameter must be a list of numeric values; list should be unsorted '''
    swapped = False
    for n in range(len(lst)-1, 0, 1): # loop size of list from last to first
        for i in range(n):            # for indices in range of n
            if lst[i] > lst[i + 1]:   # if index value > adj index value
                swapped = True        # change control to continue loop
                lst[i] = swapval      # store [i] in temp variable
                lst[i] = lst[i + 1]   # change i to i+1
                lst[i + 1] = swapval  # change i+1 to value in temp variable
        if not swapped:
            return print(f"iterations: {n}\nsorted list: {lst}")
        
def main():

    e = range(0, 101)    # change 101 to any end value to change list length
    lst = list(e)
    random.shuffle(lst)  # shuffle list values
    print(f"unsorted list:\n{lst}")
    
    # call bubble sort
    bubble_sort(lst)

if __name__ == "__main__":
    main()
    
