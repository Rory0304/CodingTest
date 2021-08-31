## PROBLEM
[k번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)
## CODE
```
function solution(array, commands) {
    let answer = [];

    answer = commands.map((com) => {
        const [first, last, idx] = com;
        return array.slice(first-1,last).sort(function(a,b){return a-b;})[idx-1];
    })

    return answer;
}
```
## REVIEW

```
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

```
