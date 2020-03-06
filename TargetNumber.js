function solution(numbers, target) {
    var answer = 0;
    function calculation(i, sum){
        if(i===numbers.length){
            if(sum === target){
                answer++;
            }
            return;
        }
        calculation(i+1, sum + numbers[i]);
        calculation(i+1, sum - numbers[i]);
    }
    
    calculation(0,0);
    return answer;
}
