### CODE
```
function solution(arr1, arr2) {
    let answer = [];
   
    for(let i=0;i<arr1.length;i++){
        answer[i] = [];
        for(let j=0;j<arr2[0].length;j++){
            let sum = arr1[i].reduce((acc,cur,curIdx) => {
                return acc += cur * arr2[curIdx][j];
            },0)
            answer[i].push(sum);
        }
    }
    
    return answer;
}
```

### REVIEW

`난이도 : 중`

reduce 사용이 아직 익숙하지 않다. 만난 오류들은 다음과 같다.

- 변수를 반환(sum)해야 하는데, return을 하지 않으면 undefined 오류가 남.

- acc += 를 하지 않으면, 곱한 값을 저장하지 못해서 제일 최근에 계산한 결과를 반환함

- 0을 지정하지 않으면, acc값은 arr1[0][0] 값으로 자동 지정됨으로 올바른 계산을 하지 못함.

