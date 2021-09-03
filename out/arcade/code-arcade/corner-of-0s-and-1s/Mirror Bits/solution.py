def mirrorBits(a):
    x = bin(a)[2:]
    return int(x[::-1], 2)

