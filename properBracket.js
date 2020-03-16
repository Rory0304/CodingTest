function solution(s){
    var answer = true;
    let list = [];
    answer = s[0] === ")" ? false : true;
    if(answer === true){
        for(let i=0;i<s.length;i++){
            s[i] === "(" ? list.push(s[i]) : list.pop();
        }
    }
    if(list.length){
        answer = false;
    }
    return answer;
}
