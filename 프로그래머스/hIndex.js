function solution(citations) {
    let answer = 0;
    let hindex = 0;
    
    citations.sort(function(a,b){
        return b-a;
    });
    
    while(hindex + 1 <= citations[hindex]){
        hindex++;
    }
    
    answer = hindex;
    return answer;
}
