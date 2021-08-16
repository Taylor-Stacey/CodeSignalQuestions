def pagesNumberingWithInk(current, numberOfDigits):
    numberOfDigits -= len(str(current))
    
    while numberOfDigits > 0:
        if len(str(current)) > numberOfDigits:
            break
        else:
            current += 1
            numberOfDigits -= len(str(current))
    
    return current