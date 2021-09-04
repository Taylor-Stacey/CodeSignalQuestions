def squareDigitsSequence(a0, cache={}):
    aStr = str(a0)
    
    if len(cache) < 1:
        cache[a0] = 1
        
    summed = 0
    for i in aStr:
        x = int(i) * int(i)
        summed += x

    if summed in cache:
        return len(cache) + 1
    else:
        cache[summed] = 1
        return squareDigitsSequence(summed, cache)
        