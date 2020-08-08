## REVIEW

```
function solution(s) {
    
    let answer = [];
    
    /* 주어진 길이(i) 만큼 문자열(s) 을 자른다. */
    const sliceStr = (s, i) => {
        let str = [];
        for(let j = 0;j<s.length;j+=i){
            str.push(s.substring(j,j+i));
        }
        return str;
    }
    
    /* 문자열 길이가 1일 경우, 바로 1을 반환한다.*/
    if(s.length === 1) return 1;

    /* 문자열 길이가 2이상일 경우 */
    
    for(let i=1;i<=s.length/2;i++){
        let result = sliceStr(s,i);
        let str = "";
        let start = result.shift();
        let index = 1;
        
        while(result.length > 0){
            let comp = result.shift();
            if(start === comp){
                index++;
            }
            else{
                str += (index === 1 ? start : (index + start));
                index = 1;
                start = comp;
            }
        }
        
        if(index === 1) str += start;
        else str += (index + start);
        answer.push(str);
    }
    
    answer.sort(function(a,b){
        return a.length - b.length;
    })
    
    return answer[0].length;
}
```

### REVIEW

`난이도 : 상`

