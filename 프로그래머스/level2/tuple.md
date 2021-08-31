## CODE
```
function solution(s) {
    let answer = [];
    
    s = s.slice(2,s.length-2).split("},{").map(e => e.split(","));
    
    s.sort(function(a,b){
        return a.length - b.length;
    })
    
    for(let i=0;i<s.length;i++){
        for(let w of s[i]){
            if(!answer.includes(w)){
                answer.push(w);
            }
        }
    }

    return answer.map(e => parseInt(e));
}
```

## REVIEW

`난이도 : 중`

튜플 문자열을 리스트 형태로 변환하는 부분이 까다로웠다. regExp를 이용해서 푸는 방법은 아래와 같다.
replace로 {, }를 [,] 형태로 바꾸고 JSON.parse를 이용해서 리스트 형태로 반환하는 것이 중요하다.

```
JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
```

