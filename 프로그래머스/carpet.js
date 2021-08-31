function solution(brown, yellow) {
    let width = yellow+2;
    let height = 3
    let space = brown + yellow;
    while(width*height !== space){
        height+=1;
        width = (brown-(height*2))/2+2;
    }
    return [width,height];
}
