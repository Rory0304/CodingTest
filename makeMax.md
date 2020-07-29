## CODE
```
function solution(number, k) {
    
    number = number.split("");
    let bigNum = [];
    
    for(let i=0;i<number.length;i++){
        
        let curNum = number[i];
         
        //스택의 이전 인덱스 숫자와 현재 숫자를 비교해서, 현재 숫자가 크다면 이전 숫자를 스택에서 pop하고 k를 줄인다.
        while(k > 0 && bigNum[bigNum.length-1] < curNum){
            bigNum.pop();
            k--;
        }
        
        bigNum.push(curNum);
    }
    
    //만약 k가 남아있다면, 남아있는 k만큼 스택의 숫자를 제거한다.
    if(k > 0) {
        bigNum.splice(bigNum.length-1,k);
    }
    
    return bigNum.join("");
}
```

## REVIEW

`난이도 상`

코드 자체는 작성하는데 어려움이 없었지만, 알고리즘을 생각해 내는 것이 어려웠다.
