num = int(input())
target = num
min = target

while num > 0:
    temp = num + sum(map(int, str(num)))
    
    if target == temp and min > num:
        min = num

    num -= 1

if min == target:
    print(0)
else :
    print(min)
