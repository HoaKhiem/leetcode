def rotateArr(arr,d):
    arr = arr[d:len(arr)] + arr[0:d]
    return arr