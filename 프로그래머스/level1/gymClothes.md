## CODE

```
function solution(n, lost, reserve) {
    var answer = [];
    
    //여분의 체육복을 가지고 있는 사람이 다른 사람에게 빌려주는 전체 경우를 구해서 체육복을 빌리지 못한 사람들의 수를 계산한다.
    const borrow = (lost, reserve) => {
        for(let i=0;i<lost.length;i++){
            for(let j=0;j<reserve.length;j++){
                if(lost[i]-1 === reserve[j] || lost[i] + 1 === reserve[j]){
                    reserve.splice(j,1);
                    lost.splice(i,1);
                    borrow(lost, reserve);
                }
            }
        }
        answer.push(lost.length);
    }
    
    //중복 요소를 제거한다. 여분의 체육복을 가지고 있었으나, 잃어버린 사람은 체육복이 1벌이므로 다른 사람에게 빌려줄 수 없다.
    let newlost = lost.filter(l => !reserve.includes(l));
    let newreserve = reserve.filter(r => !lost.includes(r));
    
    borrow(newlost, newreserve);
    
    //스프레드 문법을 이용해서 최솟값을 구한다.
    return n - Math.min(...answer);
}
```

### REVIEW

`난이도 : 중`

탐욕법을 이용해서 푸는 문제이다. 탐욕 알고리즘은 여러 경우 중 제일 최적으로 여겨지는 값을 하나를 선택해서 진행하는 방식이다.

### REFS

[동적 계획법과 탐욕법](https://velog.io/@cyranocoding/%EB%8F%99%EC%A0%81-%EA%B3%84%ED%9A%8D%EB%B2%95Dynamic-Programming%EA%B3%BC-%ED%83%90%EC%9A%95%EB%B2%95Greedy-Algorithm-3yjyoohia5)
