def leastFactorial(n):
    if n <= 1:
        return 1
    
    for i in range(10):
        if math.factorial(i) >= n:
            return math.factorial(i)
