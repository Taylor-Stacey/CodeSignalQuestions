def isSmooth(arr):
    if len(arr) > 0:
        first, last = arr[0], arr[-1]
        if len(arr) % 2 == 0:
            first_middle, second_middle = (int(len(arr)) //2) -1, (int(len(arr))//2)
            summed = arr[first_middle] + arr[second_middle]
        else:
            summed = arr[int(len(arr))//2]
    
    if first == summed == last:
        return True
    return False
