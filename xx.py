def xx(x):
    if x < 0 or (x > 0 and x % 10 == 0):
        return False
    rs = 0
    while x > rs:
        rs = rs * 10 + x % 10
        x = x // 10
    return True if (x == rs or x == rs // 10) else False