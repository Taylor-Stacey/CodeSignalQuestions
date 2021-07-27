import itertools
def additionWithoutCarrying(param1, param2):
    p1Str, p2Str = str(param1), str(param2)
    
    summed = ""
    
    for i, j in itertools.zip_longest(reversed(p1Str), reversed(p2Str), fillvalue = 0):
        temp = int(i) + int(j)
        strTemp = str(temp)
        if len(strTemp) > 1:
            summed += strTemp[1]
        else:
            summed += strTemp
    return int(summed[::-1])