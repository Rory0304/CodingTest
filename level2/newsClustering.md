
## CODE
```
function solution(str1, str2) {
    let str1Case = [];
    let str2Case = [];
    let interSect = 0;
    let union = 0;
    let check = /[a-zA-Z]/;
    
    const splitString = (str,arr) => {
        str.split("").reduce(function(acc,cur,curIndex){
            if(check.test(str[curIndex-1]) && check.test(cur)){
                arr.push(str[curIndex-1] + cur);
            }
        })
    }
    
    splitString(str1.toUpperCase(),str1Case);
    splitString(str2.toUpperCase(),str2Case);
    
    const newSet = new Set([...str1Case, ...str2Case]);
    newSet.forEach((e) => {
        const x = str1Case.filter((i) => i===e).length;
        const y = str2Case.filter((i) => i===e).length;
        union += Math.max(x,y);
        interSect += Math.min(x,y);
    });
    
    console.log(interSect, union);
    
    return union === 0 ? 65536 : Math.floor((interSect/ union) * 65536);

}
```

## REVIEW

문제에서 원하는 합집합, 교집합을 구하는 방식이 내가 알던 방식과는 달라서 꽤 해맸다. 문제를 다시 읽어보니 쉽게 풀 수 있었던 문제.

[Set 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)에 대해서도 잘 알고 가면 유용하다.



