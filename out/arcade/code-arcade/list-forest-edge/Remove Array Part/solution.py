def removeArrayPart(inputArray, l, r):
    return [inputArray[i] for i in range(len(inputArray)) if i not in range(l, r+1)]