##CODE

```
function solution(answers) {
    
    let answer = [];
    let result = [];
    
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5];
    const p3 = [3,3,1,1,2,2,4,4,5,5];
    
    const check = (p) => {  
        let correct = 0;
        for(let i=0;i<answers.length;i++){
            if(answers[i] === p[i%p.length]){
                correct++;
            }
        }
        return correct;
    }
    
    result[0] = check(p1);
    result[1] = check(p2);
    result[2] = check(p3);
    
    let idx = result.indexOf(Math.max(...result));
    
    while(idx != -1){
        answer.push(idx+1);
        idx = result.indexOf(Math.max(...result), idx+1);
    }

    return answer;
}
```

##REVIEW

`난이도 : 하`

스프레드 문법과 indexOf 메소드를 이용해서 해결했다.

그냥 max값을 구한 후, max과 동일한 p를 찾아서 answer 배열에 (1,2,3)을 넣는 것이 더 직관적이다.

filter를 이용해서 맞은 숫자를 구하면 코드를 더 단순하게 만들 수 있다.
