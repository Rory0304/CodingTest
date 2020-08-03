## CODE
```
function solution(people, limit) {
    let answer = 0;
    
    //오름차 순으로 배열을 정렬한다.
    people.sort(function(a,b){
        return a-b;
    })
    
    //0번째에 위치한 보트 = 무게가 가장 작은 사람
    //0번째 위치한 사람 + i번째 사람 합이 보트의 limit 이하이면 보트 1개로 최대 2명 구출 가능
    for(let i=people.length-1;i>0;i--){
        if(people.length > 1 && people[0] + people[i] <= limit){
            answer++;
            people.splice(0,1);
            people.splice(i-1,1);
        }
    }
    
    //탑승 가능한 인원이 1명인 경우
    answer += people.length;
    
    return answer;
}
```

## Review

`난이도 : 중상`

첫 번째 시도에서 미리 배열을 정렬하지 않고, for문을 여러번 반복해서 탑승 가능한 인원을 찾다보니 시간 초과로 틀렸음.

