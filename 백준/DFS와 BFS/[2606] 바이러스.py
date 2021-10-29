
import sys
from queue import deque

n = int(sys.stdin.readline())
pair = int(sys.stdin.readline())
network = [[] for i in range(n+1)]

for _ in range(pair):
    a, b = map(int, sys.stdin.readline().split())
    network[a].append(b)
    network[b].append(a)

stack = deque()
stack.append(1)
visited = []


while stack:
    x = stack.popleft()
    for start in network[x]:
        if start not in visited:
            visited.append(start)
            stack.append(start)

print(len(visited)-1)


        
