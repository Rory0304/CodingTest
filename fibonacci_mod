function solution(n) {
    let answer = 0;
    let pre = 0;
    let next = 1;
    
    for(let i=1;i<n;i++){
        answer = (pre + next)%1234567;
        pre = next;
        next = answer;
    }
    
    return answer;
}
