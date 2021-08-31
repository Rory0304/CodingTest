### CODE

```
function solution(triangle) {
    for(let i=1;i<triangle.length;i++){
        triangle[i] = triangle[i].map((e, index) => {
            if(index === 0) return e + triangle[i-1][0];
            else if(index === triangle[i].length-1) return e + triangle[i-1][index-1];
            else{
                return Math.max(e + triangle[i-1][index-1], e + triangle[i-1][index]);
            }
        })
    }
    
    return Math.max(...triangle[triangle.length-1]);
}
```

### REVIEW

[Java 풀이 과정 참고](https://blog.naver.com/mitty0304/221672151556)

index가 0일 경우 : 이전 행에서 index가 0인 엘리먼트를 더한다.

index가 마지막일 경우 : 이전 행에서 index가 마지막인 엘리먼트를 더한다.

그 외 : ``` Math.max(e + triangle[i-1][index-1], e + triangle[i-1][index]);```

Math.max를 바로 array에 적용할 수는 없다. array = [1,2,3,4]일 경우, Math.max는 콤마를 포함해서 "1,2,3,4"를 인식하기 때문에, 숫자만을 비교할 수 없어서 NaN을 발생하게 된다.

따라서, Math.max.apply(null, array)를 적용하거나 Math.max(...array)를 사용한다.
