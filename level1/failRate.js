function solution(N, stages) {
    let failRate = [];
    for(let i=1;i<=N;i++){
        let trial = stages.filter((stage) => i <= stage).length;
        let fail =  stages.filter((stage) => i === stage).length;
        
        if(trial === 0) failRate.push([i,0]);
        else failRate.push([i,fail/trial]);
    }
     
    failRate.sort(function(a,b){
        if(a[1] === b[1]) return a[0] - b[0]; //중요
        return b[1]-a[1];
    })
    
    let answer = [];
    failRate.map((a) => answer.push(a[0]));
    return answer;
}
