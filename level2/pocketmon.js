function solution(nums) {
    let answer = 0;
    let types = [];
    for(let i=0;i<nums.length;i++){
        if(!types.includes(nums[i])){
            types.push(nums[i]);
            answer++;
        }
        if(answer === (nums.length/2)) break;
    }
    
    return answer;
}
