## 문제 이해

해당 문제는 그래프 탐색을 하기 때문에 DFS 혹은 BFS 중 선택해서 풀 수 있다.  
첫 숫자에 대하여 DFS 방식으로 진행하는 것이 직관적이라 생각해서 DFS로 풀었으나, Deque를 활용하여 풀이할 수 있을 것으로 보인다.

## 문제 풀이 방법

## DFS

### 종료 조건

배열에 담긴 숫자를 모두 사용했을 때,  
즉, 배열 numbers = [1,1,1,1]이 주어졌다면 +/- 연산 활용 횟수가 배열의 길이만큼일 때가 종료한다.  
연산 활용 횟수 (i === numbers.length)

### 비교 조건

만약 연산자를 조합한 결과가 target 값과 같다면 answer를 1증가시키고 반환한다.

### 반복 조건

현재 노드에 대하여 + 와 - 연산을 진행하고. 계산 결과를 재귀 함수에 넘긴다.  
(+)연산 결과를 트리의 왼쪽 노드, - 연산 결과를 트리의 오른쪽 노드에 배치한다고 했을 때,  
(+)연산 재귀 함수를 먼저 실행하기 때문에, + 연산이 끝날 때까지 (종료 조건이 만족될 때까지) 깊이 우선 방식으로 탐색하게 된다.  


## 코드
```
function solution(numbers, target) {
    var answer = 0;
    function calculation(i, sum){
        if(i===numbers.length){
            if(sum === target){
                answer++;
            }
            return;
        }
        calculation(i+1, sum + numbers[i]);
        calculation(i+1, sum - numbers[i]);
    }
    
    calculation(0,0);
    return answer;
}
```

## BFS

## 설명

deque를 활용한다. queue에 들어간 숫자가 없을 때까지 (트리를 너비 우선 방식으로 모두 탐색하였을 때까지) while을 반복한다.  

deque에 들어간 노드를 popleft로 빼서, 해당 순서가 마지막 노드라면 target 값과 일치하는 지 확인 후 answer값을 업데이트한다.  
만약 마지막 노드가 아니라면 queue에 해당 노드의 너비 우선 탐색한 결과를 넣는다.  
예를 들어 해당 노드가 1이라면 2(+1한 값)과 0(-1한 값)을 queue에 넣는다.  

## 코드
```
from collections import deque

def solution(numbers, target):
    answer = 0
    queue = deque()
    queue.append([numbers[0], 0])
    queue.append([-1*numbers[0], 0])
    
    while queue:
        num, idx = queue.popleft()
        idx += 1
        if idx == len(numbers):
            if num == target:
                answer += 1
        else:
            queue.append([num + numbers[idx], idx])
            queue.append([num - numbers[idx], idx])
            
    return answer
```
