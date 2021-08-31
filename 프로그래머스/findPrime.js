function solution(numbers) {
    let numbers_array = numbers.split("");
    let primeNumber = [];
    
    const merge = (numbers,str) => {
        if(str.length > 0){
            if(primeNumber.includes(Number(str)) === false){
                isPrime(Number(str));
            }
        }
        if(numbers.length > 0){
            for(let i=0;i<numbers.length;i++){
               let renewNumbers = numbers.slice(0);
                renewNumbers.splice(i,1);
                merge(renewNumbers,str + numbers[i]);
            }
        }
    }
    
    const isPrime = (n) => {
        if(n===2) return primeNumber.push(n);
        else if(n<=1) return;
        else{
            for(let i=2;i<n;i++){
                if(n%i === 0) return;
            }
            return primeNumber.push(n);
        }
    };
    
    merge(numbers_array,"");   
    
    console.log(primeNumber)
    return primeNumber.length;
}
