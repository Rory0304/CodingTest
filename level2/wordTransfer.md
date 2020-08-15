## PROBLEM
[단어변환](https://programmers.co.kr/learn/courses/30/lessons/43163)

## CODE
```
function solution(begin, target, words) {
    
    let result = 0;
    
    const search = (begin,count,visited) => {
        if(begin === target){
            if(result === 0 || count < result) result = count;
        } 
        else{
            for(let i=0;i<words.length;i++){
                let dismatch = words[i].split("").reduce((acc,cur,index)=>{
                    return cur !== begin[index] && !visited[i]? acc+1 : acc;
                },0);
                
                if(dismatch === 1){
                    visited[i] = true;
                    let newVisited = visited.slice(0);
                    search(words[i],count+1,newVisited);
                }
            }
        }
    }
    
    if(!words.includes(target)) return 0;
    else{
        let count = 0;
        let visited = [];
        
        for(let i=0;i<words.length;i++){
            visited[i] = false;
        }
        search(begin,count,visited);
        return result;   
    }
}
```

## REVIEW

너비 우선 탐색 (bfs) 문제이다.

```
          [hit]
        ____|____
       |         |
     [hot]     [dot]
    ___|___   ___|___
   |       | |       |
[lot]    [dot] .... 

```

위의 그림처럼 begin의 알파벳 구성 중 한 개의 알파벳만 바꿔서 만들 수 있는 문자(dismatch)들을 구한 후, target과 일치 여부를 검사하면 된다.

이때, 중복 문자 탐색을 방지하기 위해 visited (bool) 배열을 인자로 보낸다. 

단계 1. 노드 방문 여부를 다루는 visited 배열을 false로 초기화 한 후, search bfs 함수에 시작 단어(begin), target을 찾기까지 거리 (count), visited를 인자로 넘긴다.

단계 2. begin에서 알파벳이 하나만 다른 단어들을 추출한 후, 차례대로 너비우선탐색을 실행한다. 이때 해당 노드를 방문하는 것이므로 visited와 begin을 업데이트 해준다.

단계 3. 만약 begin이 target과 같고, target까지의 거리가 시작값(0)이거나 최솟값이라면 result를 업데이트 해준다.

단계 4. 결과 result를 반환한다.
