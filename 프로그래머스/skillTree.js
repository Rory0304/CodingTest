function solution(skill, skill_trees) {
    let answer = 0;
    let skill = skill.split("");
    
    skill_trees.forEach((s) => {
        let result = s.split("").filter(w => skill.includes(w));
        if (check(result, skill) === 1){
            answer++;
        };
    })
    
    return answer;
}

function check(result, skill){
    for(let i=0;i<result.length;i++){
        if(skill[i] !== result[i]){
            return 0;
        }
    }
    return 1;
}
