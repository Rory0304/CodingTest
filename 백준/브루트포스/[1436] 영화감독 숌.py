n = int(input())
start = 666

while n > 1:
    start += 1
    if '666' in str(start):
        n -= 1
        
print(start)
