import numpy as np
from matplotlib import pyplot as plt
import random
import math
import copy

# generate initial slime population
def first_gen(smap, dim, upper, lower):
    ''' smap = slime mold algorithm population;
        dim = area dimension;
        upper = upper boundary;
        lower = lower boundary '''

    # formula for creating random num of particles
    x = np.zeros([smap, dim])
    for i in range(smap):
        for in range(dim):
            x[i, j] = random.random()
    x[i, j] = (x * (ub[j] - lb[j]) + lb[j])

    return (x, lb, ub)

# verify boundaries
def bound_check(x, smap, dim, upper, lower):
    ''' x = initial population determined by first_gen();
        smap = slime mold algorithm population;
        dim = area dimension;
        upper = upper boundary;
        lower = lower boundary '''

    for i in range(smap):
        for j in range(dim):
            if x[i, j] > ub[j]:
                x[i, j] = ub[j]
            if x[i, j] < lb[j]:
                x[i, j] = lb[j]
    return x

