function solution(board, moves) {
    var answer = 0;
    let basket = [];
    
    const pickUp = (j) => {
        
        for(let i=0;i<board.length;i++){
            if(board[i][j-1] !== 0){
                basket.push(board[i][j-1]);
                board[i].splice(j-1,1,0);
                break;
            }
        }
        
        let basketLen = basket.length;
        //basket이 비어있는지 확인해줘서 undefined와 비교해주지 않도록 해준다.
        if(basketLen> 0 && basket[basketLen-1] === basket[basketLen-2]){
            basket.splice(basketLen-2,2);
            answer+=2
        }
    }
    
    for(let i=0;i<moves.length;i++){
        pickUp(moves[i]);
    }
    return answer;
}
