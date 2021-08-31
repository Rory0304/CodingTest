function solution(clothes) {
  var answer = 0;
  let style = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i][1] in style) {
      style[clothes[i][1]]++;
    } else {
      style[clothes[i][1]] = 1;
    }
  }

  answer =
    Object.values(style).reduce(function(acc, curr) {
      return (curr + 1) * acc;
    }, 1) - 1;

  return answer;
}
