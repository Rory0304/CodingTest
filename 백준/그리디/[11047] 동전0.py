import sys

n, k = map(int, sys.stdin.readline().split())
coins = [int(sys.stdin.readline()) for _ in range(n)]
result = 0

for i in range(len(coins)-1, -1, -1):
    result += (k // coins[i])
    k = k % coins[i]
    
print(result)