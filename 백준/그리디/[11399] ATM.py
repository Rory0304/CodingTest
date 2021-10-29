n = int(input())
line = list(map(int, input().split(" ")))
line.sort()
prev_time = line[0]
waiting_time = prev_time

for i in range(1, n):
    prev_time += line[i]
    waiting_time += prev_time
    
print(waiting_time)