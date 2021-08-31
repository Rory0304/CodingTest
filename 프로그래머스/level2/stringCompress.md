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

"aabbaccc" 문자열이 있다고 할 때, 이를 잘라서 압축할 수 있는 범위는 다음과 같다.

- 1개 단위 : "2a2ba3c"
- 2개 단위 : "aa/bb/ac/cc" => 압축할 수 있는 문자 없음 => "aabbacc"
- 3개 단위 : "aab/bac/cc" => 압축할 수 있는 문자 없음 => "aabbacc"
- 4개 단위 : "aabb/accc" => 압축할 수 있는 문자 없음 => "aabbaccc"
- 5개 단위 : "aabba/ccc" => 비교할 수 있는 문자열 길이가 다르므로, 압축할 수 없음 => X

따라서 문자열을 자를 수 있는 범위는 문자열 길이의 1/2까지 이므로, 이를 sliceStr()로 가능한 단위에 맞게 문자열을 자른다. (이를 result에 저장함)

비교를 시작하는 문자열을 start, start 이후의 비교할 문자열을 comp라고 한다. 

start와 comp를 비교해서 같다면, index의 수를 늘린다. 다르다면, index와 start를 문자열로 합쳐서 str에 저장하고, index를 초기화 시킨다. start는 comp로 맞춘다.

result 문자열을 모두 비교했다면 후처리를 해준다. aabbaccc의 예시처럼, 마지막에 ccc가 연속으로 나와서 str 저장을 못해주는 경우가 있기 때문이다.

압축된 결과를 answer에 저장하고, answer 중에서 압축된 길이가 가장 작은 문자열의 길이를 반환한다.
