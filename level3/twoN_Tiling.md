## CODE
```
function solution(n) {

    let rect = [1,2];
    
    for(let i=2;i<n;i++){
        rect.push((rect[i-1]+rect[i-2])%1000000007);
    }
    
    return rect[rect.length-1];
}
```

## REVIEW

`난이도 : 중`

문제가 어려워보이지만, 반복되는 규칙을 찾을 때는 피보나치 수열이 해답인 경우가 많다.

level3 에서 풀었던 [멀리 뛰기](https://github.com/Rory0304/CodingTest/blob/master/level3/longJump.md) 문제와 매우 유사하다.
