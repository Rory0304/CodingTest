## 문제 풀이 방법

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
