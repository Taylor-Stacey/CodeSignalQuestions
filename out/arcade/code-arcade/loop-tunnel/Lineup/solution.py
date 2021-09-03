def lineUp(commands):
    
    around = False
    count = 0
    
    for command in commands:
        if command == "L" or command == "R":
            around = not around
        if not around:
            count += 1
    return count