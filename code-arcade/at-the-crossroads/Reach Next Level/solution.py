def reachNextLevel(experience, threshold, reward):
    if experience + reward >= threshold:
        return True
    return False
    