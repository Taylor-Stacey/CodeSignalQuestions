def replaceMiddle(arr):
    if len(arr) % 2 == 1:
        return arr
    else:
        first_middle, second_middle = (int(len(arr)) // 2) - 1, (int(len(arr))//2)
        summed = arr[first_middle] + arr[second_middle]
        
        arr[first_middle] = summed
        arr.pop(second_middle)
        return arr
        
