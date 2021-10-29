import sys

city = int(sys.stdin.readline())
length = list(map(int, sys.stdin.readline().split(" ")))
oil_price = list(map(int, sys.stdin.readline().split(" ")))

result = length[0] * oil_price[0]
min_oil_price = oil_price[0]

for i in range(1, city-1):

    if min_oil_price > oil_price[i]:
        min_oil_price = oil_price[i]
    
    result += length[i] * min_oil_price

print(result)

# for i in range(city - 1):
#     if oil_price[i] < min_oil_price:
#         min_oil_price = oil_price[i]
#     result += min_oil_price * length[i]

# print(result)
