function solution(n) {
    let binaryOneLength = 0;
    binaryOneLength = toBinary(n);
    while(true){
        n++;
        if(binaryOneLength === toBinary(n)){
            break;
        }
    }
    return n;
}

function toBinary(n){
    let binary = []
    while(n > 0){   
        binary.push(Math.floor(n%2));
        n = Math.floor(n/2);
    }
    return binary.filter(x => x ===1).length;
}
