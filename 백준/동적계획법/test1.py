import sys

N, K = map(int, sys.stdin.readline().split())
items = []
for _ in range(N):
    items.append(list(map(int, sys.stdin.readline().split())))

knapsack = [[0 for _ in range(K + 1)] for _ in range(N + 1)]

for i in range(1, N+1):
    for j in range(1, K+1):
        weight = items[i-1][0]
        value = items[i-1][1]

        # j는 가방의 남은 무게
        if j < weight:
            knapsack[i][j] = knapsack[i - 1][j]
            
        else:
            knapsack[i][j] = max(value + knapsack[i - 1][j - weight], knapsack[i - 1][j])

print(knapsack[N][K])
