## Problem

[네트워크](https://programmers.co.kr/learn/courses/30/lessons/43162)

## 문제 이해

해당 문제는 그래프 탐색 문제로 DFS 혹은 BFS로 풀 수 있다. 
현재 노드와 연결된 컴퓨터들의 그룹을 짓는 방법을 생각해보면 된다.


## 문제 풀이 방법

## DFS

```
function solution(n, computers) {
    
    let answer = 0;
    let visited = [];
    
    for(let i=0;i<n;i++){
        visited[i] = false;
    }
    
    const dfs = (index) => {
        visited[index] = true;
        for(let i=0;i<n;i++){
            if(computers[index][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i);
            answer++;  
        };
    }
    
    return answer;
}
```

DFS 재귀를 사용한다. 컴퓨터 1을 검사하다가 컴퓨터 2와 연결된 상태임을 확인하면, 컴퓨터 2를 재귀 함수를 이용하여 검사하는 방식이다.

visited는 컴퓨터를 방문했는지 여부를 나타내는 배열이고, dfs는 연결 상태를 확인하는 함수이다.

단계 1. visted에 총 n개의 컴퓨터 방문 여부를 false로 초기화 한다.

단계2. n개의 컴퓨터를 돌면서 방문을 하지 않았다면 dfs 함수를 호출한다. 그리고 호출한 횟수만큼 answer을 1증가 시킨다. == 다른 그룹이 생성되는 상태

단계3. a 컴퓨터에 b 컴퓨터가 연결된 상태이고, b 컴퓨터는 아직 방문하지 않았다면 b 컴퓨터를 대상으로 다시 dfs를 호출한다.

위 과정을 모든 컴퓨터를 확인할 때까지 반복한다.


## BFS

```
from collections import deque

def solution(n, computers):

    queue = deque()
    visited = []
    answer = 0
    
    # 0, 1, 2
    for i in range(n):
        if i not in visited:
            visited.append(i)
            queue.append(i)
            answer += 1
            
            while queue:
                cur = queue.popleft()
                for j in range(n):
                    
                    node = computers[cur][j]
                    if computers[cur][cur] == 1 and node == 1 and j not in visited:
                        visited.append(j)
                        queue.append(j)

    return answer
```

0번째 노드부터 시작해서 그룹을 생성한다. answer(그룹 수)에 1을 증가시킨다.  

0번째 노드와 연결된 다른 노드가 방문된 상태가 아니라면 visited 배열과 queue 배열에 추가한다.  
queue 배열에 노드가 있는 상태라면 popleft로 노드를 꺼내고 해당 노드와 연결된 노드들을 판단해서 visited / queue 배열에 추가한다.

만약 queue 배열에 노드가 없다면 하나의 그룹이 완성된 것이기 때문에 whitle 루프를 빠져나와 첫 번째 for 루프로 이동하게 된다.  
그리고 앞선 과정을 반복하여 다른 그룹을 생성한다.


