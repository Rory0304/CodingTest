import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())
numbers = [int(input()) for _ in range(n)]

def mean(arr):
    return round(sum(arr) / n)

def median(arr):
    return sorted(numbers)[n // 2]

def mode(arr):
    numbers_freq = Counter(arr);
    most_freq = numbers_freq.most_common()

    most_freq = sorted(most_freq, key=(lambda x: x[0]), reverse=False)
    most_freq = sorted(most_freq, key=(lambda x: x[1]), reverse=True)
    
    if (len(arr) > 1):
        if (most_freq[0][1] == most_freq[1][1]):
            return most_freq[1][0]
    return most_freq[0][0]


def scope(arr):
    return max(numbers) - min(numbers)
    

print(mean(numbers))
print(median(numbers))
print(mode(numbers))
print(scope(numbers))