def magicalWell(a, b, n):
    count = 0
    money = 0
    
    while count < n:
        money += a*b
        count += 1
        a += 1
        b += 1
    
    return money
    
