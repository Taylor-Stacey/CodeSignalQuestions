def makeArrayConsecutive2(statues):
    sort = sorted(statues)
    count = 0  
    for i in range(sort[0], sort[-1]):
        if i not in statues:
            count += 1
    return count

