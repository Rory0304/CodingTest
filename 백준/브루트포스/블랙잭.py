from itertools import combinations

line1 = input().split(" ")
N = int(line1[0])
M = int(line1[1])
cards = map(int, input().split(" "))

cards_sum = list(map(sum, list(combinations(cards, 3))))
cs_min = cards_sum[0]

for cs in cards_sum:
    if cs == M:
        cs_min = cs
        break
    else:
        if abs(M - cs) < abs(M - cs_min) and M > cs:
            cs_min = cs
    
print(cs_min)
