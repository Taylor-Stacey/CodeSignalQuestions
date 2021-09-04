def firstReverseTry(arr):
    if len(arr) < 2:
        return arr
    else:
        first = arr[0]
        last = arr[-1]
    
        arr[0] = last
        arr[-1] = first
    return arr
