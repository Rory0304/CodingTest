function solution(numbers) {
    let answer = '';
    
    numbers.sort(function(a, b) {
        let ab = parseInt("" + a + "" + b);
        let ba = parseInt("" + b + "" + a);
        return ab > ba? -1 : ab===ba ? 0:1
    });
        
    answer = numbers.join('').toString();
    return  parseInt(answer) === 0 ? "0" : answer;

}
