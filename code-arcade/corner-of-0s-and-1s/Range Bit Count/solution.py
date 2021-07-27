def rangeBitCount(a, b):
    arr = [bin(i)[2:] for i in range(a, b+1)]
    out = 0
    
    for i in arr:
        for x in i:
            if x == '1':
                out += 1
    
    return out
        
