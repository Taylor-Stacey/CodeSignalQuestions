def lateRide(n):
    hours = str(n // 60)
    minutes = str(n % 60)
    time = hours + minutes
    summed = 0
    
    for i in time:
        summed += int(i)
    return summed
