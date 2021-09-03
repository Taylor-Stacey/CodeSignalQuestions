def phoneCall(min1, min2_10, min11, s):
    change = s
    minCount = 1
    cost_min2_10 = min2_10 * 9
    
    if change < min1:
        return 0
    elif change == min1:
        return 1
    elif change > min1 and change > cost_min2_10:
        minCount = 10
        change -= (min1 + cost_min2_10)
        while change >= min11:
            minCount += 1
            change -= min11
    else:
        change -= min1
        while change >= min2_10:
            minCount += 1
            change -= min2_10
        
    return minCount  
        
        