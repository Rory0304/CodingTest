string = input()

minus_split_expr = string.split('-')
result = 0

for i in range(len(minus_split_expr)):
    plus_expr = sum(list(map(int, minus_split_expr[i].split('+'))))
    if i == 0:
        result = plus_expr
    else:
        result -= plus_expr

print(result)