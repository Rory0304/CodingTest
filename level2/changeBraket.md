### REVIEW

```
function solution(p) {
    
    const splitToBalance = (str) => {
        let open = 0;
        let close = 0;
        for(let i=0;i<str.length;i++){
            str[i] === "(" ? open++ : close++;
            if(open === close) return [str.slice(0,i+1), str.slice(i+1)];
        }
    }
    
    const isRight = (str) => {
        let stack = [];
        str.forEach((e) => e === "(" ? stack.push(e) : stack.pop());
        if(stack.length === 0) return true;
        else return false;
    }
    
    const makeRightStr = (str) => {
        if(str === "") return "";
        else{
            str = str.split("");
            let [u,v] = splitToBalance(str);
            if(isRight(u)) return u.join("") + makeRightStr(v.join(""));
            else{
                for(let i=1;i<u.length-1;i++){
                    u[i] = u[i] === ")" ? "(" : ")";
                }
                
                return "(" + makeRightStr(v.join("")) + ")" + u.slice(1, u.length-1).join("");
            }
        }
    }
    
    let answer = makeRightStr(p);
    
    return answer;
}
```

### REVIE

`난이도 : 중상`

전형적인 재귀로 푸는 문제이다. 크게 세 개의 함수로 나눠서 해결했다.

#### 1) isRight() : 문자열이 '올바른 괄호 문자열'인지 확인하는 함수
#### 2) splitToBalance() : 문자열을 2개의 '균형잡힌 괄호 문자열'로 나누는 함수
#### 3) makeeRightStr() : 문자열을 올바른 문자열로 바꾸는 재귀 실행 함수 

문제에서 요구하는 규칙은 다음과 같다.

> 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. (재귀 종료 기준)
> 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
> 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. (1번 재귀)
>> 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. (1번 재귀 반환 결과)
> 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
>> 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
>> 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. (2번 재귀)
>> 4-3. ')'를 다시 붙입니다. 
>> 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
>> 4-5. 생성된 문자열을 반환합니다. (2번 재귀 반환 결과)

아쉬운 점은 u와 v가 리스트 형태로 반환되기 때문에 문자열 연결 시, join("")을 통해 string 형태로 바꿔야 한다는 점이다.

아래의 코드는 solution 함수 전체를 재귀 함수로 사용하였다.

reverse 함수는 규칙의 4-4 를 구현한 것으로, 인자로 받은 문자열의 index 1부터 마지막 문자 전까지 map으로 괄호 방향을 뒤집고, 마지막 결과를 string으로 반환하였다.

```
function reverse(str) {
  return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
  if (p.length < 1) return ""; //인자로 받은 문자열 길이가 0이면 빈 문자열을 반환함

  let balance = 0;
  let pivot = 0;
  do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0); //균형잡힌 괄호 문자열인지 확인하는 반복문

  const u = p.slice(0, pivot); 
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  //만약 균형잡힌 문자열 u가 올바른 문자열이라면 처음과 끝만 짝이 맞으면 된다.그리고 solution 함수로 재귀를 실행한 결과(v)를 합친다.
  
  else return "(" + v + ")" + reverse(u);
  //만약 u가 올바른 문자열이 아니라면 solution 함수로 재귀를 실행한 결과(v)와 reverse된 u를 결과로 반환한다.
}
```
v를 solution 함수로 계속 재귀를 실행한 것과 올바른 문자열의 규칙을 찾는 것에 주목하면 코드를 간단하게 만들 수 있다.
