function solution(n, words) {
    let game = [];
    
    game[0] = words[0];
    
    for(let i=1;i<words.length;i++){
        if(game.includes(words[i]) || game[i-1].charAt(game[i-1].length-1) !== words[i].charAt(0)){
            let order = parseInt((game.length+1)%n);
            order = order === 0 ? n : order;
            return [order, Math.ceil((game.length+1)/n)];
        }
        else{
            game.push(words[i]);
        }
    }
    return [0,0];
}
