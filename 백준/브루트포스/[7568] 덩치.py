num_of_people = int(input())
weight_height_set = []
rank = []

for _ in range(num_of_people):
    weight, height = map(int, input().split())
    weight_height_set.append([weight, height])


for i in range(num_of_people):
    target = weight_height_set[i]
    num = 0
    for j in range(num_of_people):
        if i != j and target[0] < weight_height_set[j][0] and target[1] < weight_height_set[j][1]:
            num += 1
    
    rank.append(str(num+1))

result = " ".join(rank)
print(result)
