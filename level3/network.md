## Problem

[네트워크](https://programmers.co.kr/learn/courses/30/lessons/43162)

## CODE

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

## REVIEW

`난이도 : 상`

입력받은 인자 n 은 컴퓨터의 수, computers는 네트워크 정보를 담은 배열이다.
만약, n이 3이고 computers가 [[1, 1, 0], [1, 1, 0], [0, 0, 1]] 라고 할 때, 컴퓨터1과 컴퓨터2는 서로 연결되어 있지만 컴퓨터 3은 연결되어 있지 않다. 따라서 연결된 네트워크는 총 2개이다.


위의 문제는 깊이 우선 탐색 (DFS)로 해결할 수 있다.
![dfs](https://t1.daumcdn.net/cfile/tistory/2262C23554A86A5020)

컴퓨터 1을 검사하다가 컴퓨터 2와 연결된 상태임을 확인하면, 컴퓨터 2를 재귀 함수를 이용하여 검사하는 방식이다.

visited는 컴퓨터를 방문했는지 여부를 나타내는 배열이고, dfs는 연결 상태를 확인하는 함수이다.

단계 1. visted에 총 n개의 컴퓨터 방문 여부를 false로 초기화 한다.

단계2. n개의 컴퓨터를 돌면서 방문을 하지 않았다면 dfs 함수를 호출한다. 그리고 호출한 횟수만큼 answer을 1증가 시킨다.

단계3. a 컴퓨터에 b 컴퓨터가 연결된 상태이고, b 컴퓨터는 아직 방문하지 않았다면 b 컴퓨터를 대상으로 dfs를 호출한다.

위 과정을 모든 컴퓨터를 확인할 때까지 반복한다.

