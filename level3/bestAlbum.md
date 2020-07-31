## CODE

```
function solution(genres, plays) {
    let answer = [];
    let Albums = {};
     
    //앨범의 장르에 따라 고유 번호를 분류한다.
    for(let i=0;i<genres.length;i++){
        if(Albums[genres[i]]) Albums[genres[i]].push(i);
        else Albums[genres[i]] = [i];
    }
    
    //장르 별 노래 재생 수 총 합을 구하는 함수
    const getSum = (x) => {
        let result = 0;
        x.map(album => {result += plays[album]});
        return result;
    }
    
    //장르 별 노래 재생 수를 내림차순으로 정렬
    Object.values(Albums).map(album => {
        album.sort(function(a,b){
            return plays[b]-plays[a];
        })
    })

    //많이 플레이된 장르의 리스트 bestGenre 를 구한다.
    let bestGenre = Object.keys(Albums).sort(function(a,b){
        return getSum(Albums[b]) - getSum(Albums[a]);
    });
    
    //bestGenre의 순서에 따라 가장 많이 재생된 노래 2개를 answer에 넣는다.
    for(let i=0;i<bestGenre.length;i++){
        Albums[bestGenre[i]].slice(0,2).map(e => answer.push(e));
    }
    return answer;
}
```

## Review

`난이도 : 중상`

내가 작성한 코드는 거쳐야 하는 단계가 많다.

1) 먼저 장르에 따라 노래 고유 번호를 분류함.
2) 장르 별 노래 재생 수를 내림차순으로 정렬함.
3) 장르별 재생 수 합을 구해서 많이 재생된 장르를 정렬함. (bestGenre)
4) bestGenre의 순서에 따라 가장 많이 재생된 노래 2개를 선택함

1번 단계와 3번 단계는 다음과 같은 코드로 작성하면, 한 번에 구하 수 있다.

```
  const summaryGenres = genres.reduce((acc, cur, index) => {
    if (!acc[cur]) {
      acc[cur] = {
        totalPlay: 0,
        playList: [],
      };
    }

    acc[cur].totalPlay += plays[index];
    acc[cur].playList.push([index, plays[index]]);

    return acc;
```

reduce 함수를 잘 활용하는 것이 중요하다.
