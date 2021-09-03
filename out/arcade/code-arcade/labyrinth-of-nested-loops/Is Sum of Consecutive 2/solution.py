def isSumOfConsecutive2(n):
    count = 0
    
    for i in range(1, n):
        s = i
        for j in range(i + 1, n):
            s += j
            if s == n: count += 1
            elif s > n: break
            
    return count
        
