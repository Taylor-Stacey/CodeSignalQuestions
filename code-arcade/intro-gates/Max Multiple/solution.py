def maxMultiple(divisor, bound):

    count = 1
    largest = 0

    while count <= bound:
        if count % divisor == 0:
            if count > largest:
                largest = count
            else:
                count += 1
        else:
            count += 1

    return largest