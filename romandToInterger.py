def romanToInterger(s):
    d = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    k = 0
    for i in range(len(s)-1):
        if d[s[i+1]] > d[s[i]]:
            k -= d[s[i]]
        else:
            k += d[s[i]]
    return k + d[s[-1]]