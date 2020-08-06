## CODE

```
function solution(s) {
    s = s.split(" ");
    let pattern = /[a-zA-Z]/;
    for(let i=0;i<s.length;i++){
        if(s[i] !== ""){
            if(pattern.test(s[i][0])){
                s[i] = s[i][0].toUpperCase() + s[i].slice(1).toLowerCase();
            }
            else{
             s[i] = s[i][0] + s[i].slice(1).toLowerCase();
            }
        }
    }
    
    return s.join(" ");
}
```

## REVIEW

`난이도 : 중`

정규식 문자열은 test() 메소드로 일치여부(boolean)를 검사할 수 있다.

문자열 마지막 단어가 공백일 경우, s[0]에서 undefined 값이 반환되기 때문에 예외처리를 해준다.

하지만, 위의 방법보다는 아래처럼 charAt을 사용하면 코드를 더 간단하게 만들어줄 수 있다.

```
function solution(s) {
     return s.split(" ").map(s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(" ");
}
```
