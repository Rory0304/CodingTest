## CODE

```
function solution(A,B){
    var answer = 0;

    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);

    for(let i=0;i<A.length;i++){
        answer += A[i] * B[i];
    }
    
    return answer;
}
```

## REVIEW

`난이도 : 하`

자바스크립트에서 sort() 함수는 유니코드 포인트 순서로 문자열을 정렬하기 때문에, A.sort()만을 사용하면 제대로 정렬되지 않는다.

[Array.prototype.sort() 설명 보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

> 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.

따라서, 숫자를 정렬할 때는 a(앞 값) b(뒤 값)을 비교하여, 0보다 작으면 a를 작은 값으로 0보다 크면 b를 작은 값으로 판단하는 코드를 작성해주면 된다.



