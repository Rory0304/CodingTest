function solution(n) {
    var answer = '';
    answer = answer + (n%3 === 2 ? "2" : n%3 === 1? "1" : "4");
    while(n > 3){
        if(n%3 === 0){
            n = parseInt(n/3)-1;
        }
        else{
            n = parseInt(n/3);
        }
        answer = (n%3 === 2 ? "2" : n%3 === 1? "1" : "4") + answer;
    }
    return answer;
}
