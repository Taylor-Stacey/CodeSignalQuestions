def arrayPacking(a):
    arr = ['{:08b}'.format(i) for i in a][::-1]
    out = ""
    for i in arr:
        out += i
            
    
    return int(out, 2)
    