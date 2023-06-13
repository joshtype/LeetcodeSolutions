# Joshua Gregory/Jan. 2023
# Algorithmic Functions for Searching
# Linear Searching through sorted and unsorted lists

import random

# Linear Searching through sorted list
def srch_srtd(lst, n):
    ''' Linear Search sorted list. Parameters include list of nums 1-100
        in sorted order and an n value to find. '''

    # iterate over indices and elements of sorted list
    for i, e in enumerate(lst):
        if n == e:
            print(f"{n} in index {i}, {n} actions to find n.")
            print(f"(Time Complexity = Linear Time, 0(n), n = {n}.)")

# Linear Search through unsorted list
def srch_unsrtd(lst, n):
    ''' Linear Search unsorted list; parameters include list of nums 1-100
        in unsorted order and an n value to find '''

    # iterate over indices and elements of unsoted list
    for i, e in enumerate(lst):
        if n == e:
            print(f"{n} in index {i}; {i+1} actions to find n.")
            print(f"(Time Complexity = Linear Time, 0(n), n = {i+1}.)")

def main():
    
    lst = list(range(1, 101))      # sorted list 1-100
    n1 = 1                         # best case n-value
    n2 = 100                       # worst case n-value
    n3 = random.randrange(1, 101)  # random case n-value

    print("Search sorted list of 1 - 100 using best, worst, and random cases:")
    srch_srtd(lst, n1)  # search for best case
    srch_srtd(lst, n2)  # search for worst case
    srch_srtd(lst, n3)  # search for random case

    print("\nSearch unsorted list of 1 - 100 using best, worst, and random cases:")
    random.shuffle(lst)   # unsort list
    srch_unsrtd(lst, n1)  # search for best case
    srch_unsrtd(lst, n2)  # search for worst case
    srch_unsrtd(lst, n3)  # search for random case
    
if __name__ == "__main__":
    main()
